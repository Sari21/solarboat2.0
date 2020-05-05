import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "../model/news";
import { ApiService } from "../shared/api.service";
import {TokenStorageService} from '../auth/token-storage.service';
import {PictureService} from '../shared/picture.service';

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  allnews: News[] = [];
  pageNumber: number = 0;
  isLastPage: boolean = false;
  public roles: string[];
  public authority: string;
  form: any = {};
  failed = false;
  errorMessage = '';
  pictureService: PictureService;
  fileToUpload: File = null;

  constructor(private http: HttpClient, private apiService: ApiService, private tokenStorage: TokenStorageService, pictureService: PictureService) {
    this.pictureService = pictureService;
  }

  ngOnInit(): void {
    this.getNews();
    this.checkAuth();
  }
  onSubmit() {
    console.log(this.fileToUpload.name);
    this.uploadFileToActivity();
    const o: Object = {
      title_hu: this.form.title,
      content_hu: this.form.content,
      title_en: "angolcim",
      content_en: "angoltartalommmmmmmmmmmmmmmmm",
      picture: '../../assets/gallery/' + this.fileToUpload.name,
    };
    const b = this.http
        .post("http://localhost:8080/api/news", o)
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

  /*  getNews(): void {
      console.log('getnews');
      const json = this.http
          .get('http://localhost:8080/api/news')
          .subscribe(data => {
            console.log(data);
            this.allnews = data;
          });
    }*/
  public getNews() {
    this.apiService.getNews(this.pageNumber).subscribe(
      (res) => {
        var data: any = res;
        <News[]>data.content.forEach((element) => {
          this.allnews.push(element);
        });
        this.pageNumber++;
        this.isLastPage = data.last;
      },
      (err) => {
        alert("get error");
      }
    );
  }

  postNews(): void {
    // tslint:disable-next-line:ban-types
    const o: Object = {
      title_hu: "magyarcim",
      content_hu: "magyartartalommmmmmmmmmmmmmmmmmmmm",
      title_en: "angolcim",
      content_en: "angoltartalommmmmmmmmmmmmmmmmmmmmmmmmm",
      picture: "kepkepkep",
    };
    const b = this.http
      .post("http://localhost:8080/api/news", o)
      .subscribe((data) => {
        console.log(data);
      });
  }
  putNews(): void {
    const o: Object = {
      id: 2,
      title: "ez a címe:(",
      content: "ez a tartalma:(",
      picture: "itt van hozzá a kép:(",
    };
    const b = this.http
      .put("http://localhost:8080/api/news", o)
      .subscribe((data) => {
        console.log(data);
      });
  }
  deleteNews(): void {
    const b = this.http
      .delete("http://localhost:8080/api/news/3")
      .subscribe((data) => {
        console.log(data);
      });
  }

  handleClick(event: Event) {
    console.log("Click!’", event);
  }
}
