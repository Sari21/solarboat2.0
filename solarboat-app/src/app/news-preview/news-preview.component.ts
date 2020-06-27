import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {News} from '../model/news';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {PictureService} from '../shared/picture.service';
import {HttpClient} from '@angular/common/http';
import {NewsService} from '../shared/news.service';
import {Globals} from '../globals';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  shortArticleEn: string;
  form: any = {};
  failed = false;
  errorMessage = '';
  pictureService: PictureService;
  fileToUpload: File = null;
  shortArticleHu: string;

  @Input() authority: string;
  @Input() news: News;
  @Output() onRemove = new EventEmitter<News>();


  constructor(private http: HttpClient, private globals: Globals, private apiService: NewsService, private modalService: NgbModal, pictureService: PictureService) {
    this.pictureService = pictureService;
  }
  ngOnInit(): void {
    this.shortArticleHu = this.news.content_hu.substring(0, 100) + '...';
    this.shortArticleEn= this.news.content_en.substring(0, 100) + '...';
    this.form.title = this.news.title_hu;
    this.form.content = this.news.content_hu;
  }

  openContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, centered: true, size: 'md' });
  }

  delete(id: number) {
    this.onRemove.emit(this.news);
    //TODO: kép törlése
    const b = this.http
        .delete(this.globals.BASE_URL + '/api/news/'.concat(id.toString()))
        .subscribe((data) => {
          console.log(data);
        });
  }


  onSubmit(id: number) {
    this.news.title_hu = this.form.title;
    this.news.content_hu = this.form.content;
    const newsId = id;
    let o: Object;
    if (this.fileToUpload != null) {
      this.news.picture = '../../assets/news/' + this.fileToUpload.name;
      console.log('kep modositas');
      this.uploadFileToActivity();
      o = {
        id: newsId,
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: this.news.title_en,
        content_en: this.news.content_en,
        picture: '../../assets/news/' + this.fileToUpload.name

      };
    } else {
      o = {
        id: newsId,
        title_hu: this.form.title,
        content_hu: this.form.content,
        title_en: this.news.title_en,
        content_en: this.news.content_en,
        picture: ''
      };
    }
    const b = this.http
        .put(this.globals.BASE_URL + "/api/news", o)
        .subscribe((data) => {
          console.log(data);
        });
    this.modalService.dismissAll('put');
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
}
