import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {

    news: string;

  constructor() {
    this.news = 'Csatlakozás';
}

  ngOnInit(): void {

  }

}
