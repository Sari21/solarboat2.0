import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mainpage-news',
  templateUrl: './mainpage-news.component.html',
  styleUrls: ['./mainpage-news.component.css']
})
export class MainpageNewsComponent implements OnInit {

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getNews(): void {
    console.log("getnews");
    let json = this.http
        .get("http://localhost:8080/api/news")
        .subscribe(data => {
          console.log(data);
        });
  }
  postNews(): void {
    var o: Object = {
      title: "ez a címe:)",
      content: "ez a tartalma:)",
      picture: "itt van hozzá a kép:)"
    };
    var b = this.http
        .post("http://localhost:8080/api/news", o)
        .subscribe(data => {
          console.log(data);
        });
  }
  putNews(): void {
    var o: Object = {
      id: 2,
      title: "ez a címe:(",
      content: "ez a tartalma:(",
      picture: "itt van hozzá a kép:("
    };
    var b = this.http
        .put("http://localhost:8080/api/news", o)
        .subscribe(data => {
          console.log(data);
        });
  }
  deleteNews(): void {
    var b = this.http
        .delete("http://localhost:8080/api/news/3")
        .subscribe(data => {
          console.log(data);
        });
  }

  handleClick(event: Event) {
    console.log("Click!’", event);
  }

}
