import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {News} from '../model/news';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-mainpage-news',
  templateUrl: './mainpage-news.component.html',
  styleUrls: ['./mainpage-news.component.css']
})
export class MainpageNewsComponent implements OnInit {
    allnews: News[] = [];
    constructor(
        private http: HttpClient,
        private apiService: ApiService) {
    }
    ngOnInit(): void {
        this.getNews();
    }
    public getNews() {
        this.apiService.getNews().subscribe(
            res => {
                this.allnews = res;
            },
            err => {
                alert('get error');
            }
        );
    }
}
