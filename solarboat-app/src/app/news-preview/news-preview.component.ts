import {Component, Input, OnInit} from '@angular/core';
import {News} from '../model/news';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {PictureService} from '../shared/picture.service';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../shared/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  shortArticle_hu: string;
  form: any = {};
  failed = false;
  errorMessage = '';
  pictureService: PictureService;
  fileToUpload: File = null;

  @Input() news: News;
  title = new FormControl('');
  content = new FormControl('');

  constructor(private http: HttpClient, private apiService: ApiService, private modalService: NgbModal, pictureService: PictureService) {
    this.pictureService = pictureService;
    this.title.setValue(this.news.title_hu);
    this.content.setValue(this.news.content_hu);
  }
  ngOnInit(): void {
    this.shortArticle_hu = this.news.content_hu.substring(0, 100) + '...';
  }

  openContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, centered: true, size: 'lg' });
  }

  delete(id: number) {
    //TODO: kép törlése
    const b = this.http
        .delete('http://localhost:8080/api/news/'.concat(id.toString()))
        .subscribe((data) => {
          console.log(data);
        });
  }


  onSubmit(id: number) {
    console.log(this.fileToUpload.name);
    this.uploadFileToActivity();
    const newsId = id;
    let o: Object;
    if (this.fileToUpload != null) {
      o = {
        id: newsId,
        title_hu: this.title,
        content_hu: this.content,
        picture: '../../assets/gallery/' + this.fileToUpload.name,
      };
    } else {
      o = {
        id: newsId,
        title_hu: this.title,
        content_hu: this.content,
      };
    }
    const b = this.http
        .put("http://localhost:8080/api/news", o)
        .subscribe((data) => {
          console.log(data);
        });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  uploadFileToActivity() {
    this.pictureService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }
}
