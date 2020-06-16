import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../model/news';
import { NewsService} from '../shared/news.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {PictureService} from '../shared/picture.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
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
  constructor(private http: HttpClient, private apiService: NewsService,
              private tokenStorage: TokenStorageService, pictureService: PictureService) {
    this.pictureService = pictureService;
  }

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
      o = {
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: 'angolcim',
        content_en: 'angoltartalommmmmmmmmmmmmmmmm',
        picture: '../../assets/news/' + this.fileToUpload.name
      };
    } else {
      o = {
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: 'angolcim',
        content_en: 'angoltartalommmmmmmmmmmmmmmmm',
        picture: ''
      };
    }

    this.http
        .post('http://localhost:8080/api/news', o)
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
        date: 'most',
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: 'angolcim',
        content_en: 'angoltartalommmmmmmmmmmmmmmmm',
        picture: '',
      };
    } else {
      n = {
        id: 0,
        date: 'most',
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: 'angolcim',
        content_en: 'angoltartalommmmmmmmmmmmmmmmm',
        picture: '../../assets/news/' + this.fileToUpload.name,
      };
    }
    this.allnews.unshift(n);
  }

}
