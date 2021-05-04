import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {News} from '../model/news';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PictureService} from '../shared/picture.service';
import {NewsService} from '../shared/news.service';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ToastrService} from 'ngx-toastr';
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

// import AOS from 'aos';

@Component({
    selector: 'app-news-preview',
    templateUrl: './news-preview.component.html',
    styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {
    constructor(private apiService: NewsService, private toastr: ToastrService,
                private modalService: NgbModal, pictureService: PictureService,
                private dialog: MatDialog) {
        this.pictureService = pictureService;
        const currentYear = new Date().getFullYear();
        this.maxDate = new Date(currentYear + 1, 11, 31);
    }

    // tslint:disable-next-line:variable-name
    shortArticleEn: string;
    shortArticleHu: string;
    form: any = {};
    failed = false;
    errorMessage = '';
    pictureService: PictureService;
    fileToUpload: File = null;
    @Input() authority: string;
    @Input() news: News;
    @Output() onRemove = new EventEmitter<News>();
    config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        placeholder: 'Enter text here...',
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial',
        toolbarHiddenButtons: [
            [
                'textColor',
                'backgroundColor',
                'customClasses',
                'link',
                'unlink',
                'insertImage',
                'insertVideo',
                'insertHorizontalRule'
            ]
        ]
    };
    maxDate: Date;

    decodeEntities(str) {
        // this prevents any overhead from creating the object each time
        const element = document.createElement('div');
        if (str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }
        return str;
    }

    ngOnInit(): void {
        this.shortArticleHu = this.decodeEntities(this.news.content_hu.replace(/<[^>]+>/g, ''));
        this.shortArticleHu = this.shortArticleHu.substring(0, 100) + '...';
        this.shortArticleEn = this.decodeEntities(this.news.content_en.replace(/<[^>]+>/g, ''));
        this.shortArticleEn = this.shortArticleEn.substring(0, 100) + '...';

        this.form.title = this.news.title_hu;
        this.form.content = this.news.content_hu;
        this.form.title_en = this.news.title_en;
        this.form.content_en = this.news.content_en;
        this.form.date = this.news.date;
    }

    openContent(content, lg) {
        this.modalService.open(content, {scrollable: true, centered: true, size: lg ? 'lg' : 'md'});
    }

    delete(id: number) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '300px',
            data: 'Biztosan ki szeretnéd törölni a hírt?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.onRemove.emit(this.news);
                // TODO: kép törlése
                this.apiService.deleteNews(id).subscribe(
                    (res) => {
                        this.showSuccess('Sikeres törlés');
                    },
                    (err) => {
                        this.showError(err.error.message, 'Sikertelen törlés');
                    }
                );
            }
        });
    }

    onSubmit(empForm: any, id: number) {
        this.news.title_hu = this.form.title;
        this.news.content_hu = this.form.content;
        this.news.title_en = this.form.title_en;
        this.news.content_en = this.form.content_en;
        this.news.date = this.form.date ? this.form.date : this.news.date;
        const newsId = id;
        if (this.fileToUpload) {
            this.news.picture = '../../assets/news/' + this.fileToUpload.name;
            // console.log('kep modositas');
            this.uploadFileToActivity();
        }
        const o = {
            id: newsId,
            title_hu: this.form.title,
            content_hu: this.form.content,
            title_en: this.form.title_en,
            content_en: this.form.content_en,
            // date: this.form.date.replace(/\./g, '-'),
            date: this.form.date ? this.formatDate(this.form.date) : null,
            picture: this.fileToUpload ? '../../assets/news/' + this.fileToUpload.name : this.news.picture

        };
        this.apiService.putNews(o).subscribe(
            (res) => {
                this.showSuccess('Hír módosítva');
                this.modalService.dismissAll('put');
                this.form = empForm;
                this.form.reset();
                this.ngOnInit();
            },
            (err) => {
                this.showError(err.error.message, 'Sikertelen módosítás');
            }
        );

    }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.pictureService.postFile(this.fileToUpload, 'news').subscribe(data => {
            // do something, if upload success
        }, error => {
            // console.log(error);
        });
    }

    showSuccess(message) {
        this.toastr.success(message);
    }

    showError(message, title) {
        this.toastr.error(message, title);
    }

    formatDate(date) {
        const newDate = new Date(date);
        const mm = newDate.getMonth() + 1; // getMonth() is zero-based
        const dd = newDate.getDate();

        const resultDate = [newDate.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');

        return resultDate;
    }
}
