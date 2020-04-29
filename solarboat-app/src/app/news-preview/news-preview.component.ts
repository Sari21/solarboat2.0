import {Component, Input, OnInit} from '@angular/core';
import {News} from '../model/news';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  shortArticle_hu: string;

  @Input() news: News;
  constructor(private modalService: NgbModal) {
}
  ngOnInit(): void {
    this.shortArticle_hu = this.news.content_hu.substring(0, 100) + '...';
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, centered: true, size: 'lg' });
  }

}
