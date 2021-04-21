import {Component, OnInit} from '@angular/core';
import {News} from '../model/news';
import {NewsService} from '../shared/news.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {PictureService} from '../shared/picture.service';
import {Globals} from '../globals';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    constructor(private apiService: NewsService, private toastr: ToastrService,
                private tokenStorage: TokenStorageService, pictureService: PictureService, private globals: Globals) {
        this.pictureService = pictureService;
    }

    allnews: News[] = [];
    pageNumber = 0;
    isLastPage = false;
    public roles: string[];
    public authority: string;
    form: any = {};
    pictureService: PictureService;
    fileToUpload: File = null;
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

    ngOnInit(): void {
        this.getNews();
        this.checkAuth();
    }

    onSubmit(empForm: any, event: Event) {
        event.preventDefault();
        // tslint:disable-next-line:ban-types
        let o: Object;
        if (this.fileToUpload != null) {
            this.uploadFileToActivity();
        }
        o = {
            title_hu: this.form.title,
            content_hu: this.form.content,
            title_en: this.form.title_en,
            content_en: this.form.content_en,
            date: this.form.date ? this.formatDate(this.form.date) : null,
            picture: this.fileToUpload ? '../../assets/news/' + this.fileToUpload.name : ''
        };
        console.log(o);
        this.apiService.addNews(o).subscribe(
            (data) => {
                this.showSuccess('Sikeres mentés');
                this.pushNews();
                this.form = empForm;
                this.form.reset();
                this.fileToUpload = null;
            },
            (err) => {
                console.log(err)
                this.showError(err.message, 'Sikertelen mentés');
            });
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

    checkAuth() {
        this.authority = undefined;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every((role) => {
                if (role === "ROLE_ADMIN") {
                    this.authority = "admin";
                    return false;
                }
                this.authority = "user";
                return true;
            });
        }
    }

    onDeleteNews(news: News) {
        this.allnews = this.allnews.filter(rowObj => rowObj.id !== news.id);
    }

    public getNews() {
        this.apiService.getNews(this.pageNumber).subscribe(
            (res) => {
                // tslint:disable-next-line:prefer-const
                let data: any = res;
                // console.log(data);
                <News[]>data.content.forEach((element) => {
                    this.allnews.push(element);
                });
                this.pageNumber++;
                this.isLastPage = data.last;
            },
            (err) => {
                this.showError(err.message, 'Hírek sikertelen lekérése');
            }
        );
    }

    private pushNews() {
        let n: News;
        n = {
            id: 0,
            title_hu: this.form.title,
            content_hu: this.form.content,
            title_en: this.form.title_en,
            content_en: this.form.content_en,
            date: this.form.date ? this.formatDate(this.form.date) : this.form.date,
            picture: this.fileToUpload ? '../../assets/news/' + this.fileToUpload.name : ''
        };
        this.allnews.unshift(n);
    }

    showSuccess(message) {
        this.toastr.success(message);
    }

    showError(message, title) {
        this.toastr.error(message, title);
    }

    formatDate(date) {
        const mm = date.getMonth() + 1; // getMonth() is zero-based
        const dd = date.getDate();

        return [date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
}
