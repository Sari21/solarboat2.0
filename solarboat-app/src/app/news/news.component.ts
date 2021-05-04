import {Component, OnInit} from '@angular/core';
import {News} from '../model/news';
import {NewsService} from '../shared/news.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {PictureService} from '../shared/picture.service';
import {Globals} from '../globals';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {ToastrService} from 'ngx-toastr';
import {GalleryPictureRequest} from "../model/gallery-picture-request";

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    constructor(private apiService: NewsService, private toastr: ToastrService,
                private tokenStorage: TokenStorageService, pictureService: PictureService, private globals: Globals) {
        this.pictureService = pictureService;
        const currentYear = new Date().getFullYear();
        this.maxDate = new Date(currentYear + 1, 11, 31);
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
    maxDate: Date;
    files: File[] = [];
    newPicture: GalleryPictureRequest;
    picturesSelected = false;

    ngOnInit(): void {
        this.getNews();
        this.checkAuth();
        this.newPicture = new GalleryPictureRequest();
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
            date: this.form.date ? this.globals.formatDate(this.form.date) : null,
            picture: this.fileToUpload ? '../../assets/news/' + this.fileToUpload.name : ''
        };
        this.apiService.addNews(o).subscribe(
            (data) => {
                this.showSuccess('Sikeres mentés');
                this.pushNews(data);
                this.form = empForm;
                this.form.reset();
                this.fileToUpload = null;
            },
            (err) => {
                this.showError(err.error.message, 'Sikertelen mentés');
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
                console.log(err);
                this.showError(err.error.message, 'Hírek sikertelen lekérése');
            }
        );
    }

    private pushNews(news) {
        let n: News;
        n = {
            id: 0,
            title_hu: news.title,
            content_hu: news.content,
            title_en: news.title_en,
            content_en: news.content_en,
            date: news.date,
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

    onSelectFile(event) {
        if (this.files.length > 0) {
            this.files = [];
        }
        this.files.push(...event.addedFiles);
        this.form.picture = this.files[0];
        this.picturesSelected = true;
    }

    onRemoveFile(event) {
        this.files.splice(this.files.indexOf(event), 1);
        this.picturesSelected = false;

    }
}
