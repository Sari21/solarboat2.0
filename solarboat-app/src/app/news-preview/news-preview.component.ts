import {Component, Input, OnInit} from '@angular/core';
import {News} from '../model/news';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {


  @Input() news: News;
  constructor() {
}

  ngOnInit(): void {

  }

}
