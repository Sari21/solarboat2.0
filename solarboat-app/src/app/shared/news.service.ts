import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Globals} from '../globals';

@Injectable({
  providedIn: "root",
})
export class NewsService {
  private BASE_URL = this.globals.BASE_URL + "/api";
  constructor(private http: HttpClient, public globals: Globals) {}

  getNews(pageNum: number) {
    return this.http.get(
        this.BASE_URL + "/news/page/".concat(pageNum.toString())
    );
  }
  getMainpageNews() {
    return this.http.get(this.BASE_URL + '/news/mainpage');
  }

}
