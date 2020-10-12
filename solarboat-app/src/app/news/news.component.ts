import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../model/news';
import { NewsService} from '../shared/news.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {PictureService} from '../shared/picture.service';
import {Globals} from '../globals';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private http: HttpClient, private apiService: NewsService,
              private tokenStorage: TokenStorageService, pictureService: PictureService, private globals: Globals) {
    this.pictureService = pictureService;
    this.form.date = new Date();
  }
  allnews: News[] = [];
  pageNumber = 0;
  isLastPage = false;
  public roles: string[];
  public authority: string;
  form: any = {};
  failed = false;
  errorMessage = '';
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
    console.log('gett');
    console.log(this.allnews.length);
    this.checkAuth();
    // console.log(this.allnews[0].date);
  }
  onSubmit(empForm: any, event: Event) {
    console.log(this.form.date);
    event.preventDefault();
    // tslint:disable-next-line:ban-types
    let o: Object;
    if (this.fileToUpload != null) {
      this.uploadFileToActivity();
      o = {
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: this.form.title_en,
        content_en: this.form.content_en,
        date: this.form.date,
        picture: '../../assets/news/' + this.fileToUpload.name
      };
    } else {
      o = {
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: this.form.title_en,
        content_en: this.form.content_en,
        date: this.form.date,
        picture: ''
      };
    }

    this.http
        .post(this.globals.BASE_URL + '/api/news', o)
        .subscribe((data) => {
          console.log(data);
        });
    this.pushNews();
    this.form = empForm;
    this.form.reset();
    this.fileToUpload = null;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  uploadFileToActivity() {
    this.pictureService.postFile(this.fileToUpload, 'news').subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
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
          console.log(data);
          <News[]> data.content.forEach((element) => {
            this.allnews.push(element);
          });
          this.pageNumber++;
          this.isLastPage = data.last;
        },
        (err) => {
          alert('get error');
        }
    );
  }

  private pushNews() {
    let n: News;
    if (this.fileToUpload == null) {
      n = {
        id: 0,
        date: this.form.date,
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: this.form.title_en,
        content_en: this.form.content_en,
        picture: '',
      };
    } else {
      n = {
        id: 0,
        date: this.form.date,
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: this.form.title_en,
        content_en: this.form.content_en,
        picture: '../../assets/news/' + this.fileToUpload.name,
      };
    }
    this.allnews.unshift(n);
  }
}
