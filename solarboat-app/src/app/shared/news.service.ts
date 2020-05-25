import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api";
  //private BASE_URL = "http://solarboatteam.hu:81/api";
  constructor(private http: HttpClient) {}

  getNews(pageNum: number) {
    return this.http.get(
        this.BASE_URL + "/news/page/".concat(pageNum.toString())
    );
  }
  getMainpageNews() {
    return this.http.get(this.BASE_URL + '/news/mainpage');
  }

}
