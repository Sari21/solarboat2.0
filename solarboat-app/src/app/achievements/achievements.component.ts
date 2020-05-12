import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../shared/api.service";
import { Achievement } from "../model/achievement";
import {News} from '../model/news';
import {PictureService} from '../shared/picture.service';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",

  styleUrls: ["./achievements.component.css"],
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[] = [];
  pageNumber: number = 0;
  isLastPage: boolean = false;
  form: any = {};
  failed = false;
  errorMessage = '';
  pictureService: PictureService;
  fileToUpload: File = null;
  constructor(private http: HttpClient, private apiService: ApiService, pictureService: PictureService) {
    this.pictureService = pictureService;
  }
  ngOnInit(): void {
    this.getAchievements();
  }

  public getAchievements() {
    this.apiService.getAchievements(this.pageNumber).subscribe(
      // tslint:disable-next-line:prefer-const
      (res) => {
        let data: any = res;
        <Achievement[]>data.content.forEach((element) => {
          this.achievements.push(element);
        });
        this.pageNumber++;
        this.isLastPage = data.last;
      },
      (err) => {
        alert("get error");
      }
    );
  }

  public sortby(date: string) {
    return this.achievements.sort((a, b) =>
      a[date] < b[date] ? 1 : a[date] === b[date] ? 0 : -1
    );
  }

  onDeleteAchievement(a: Achievement) {
    this.achievements = this.achievements.filter(rowObj => rowObj.id !== a.id);
  }
  //post
  onSubmit(empForm: any, event: Event) {
    event.preventDefault();
    this.uploadFileToActivity();
    const o: Object = {
        title_hu: this.form.title,
        location_hu: this.form.location,
        title_en: this.form.title,
        location_en: this.form.location,
        date: this.form.date,
        description_hu: 'leiras',
        description_en: 'leiras',
        place: this.form.place,
      isLast: false,
        picture: '../../assets/achievement/' + this.fileToUpload.name
      };
    const b = this.http
        .post("http://localhost:8080/api/achievements", o)
        .subscribe((data) => {
          console.log(data);
        });
    this.pushAchievement();
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
  private pushAchievement() {
    const n: Achievement = {
      id: 0,
      title_hu: this.form.title,
      location_hu: this.form.location,
      title_en: this.form.title,
      location_en: this.form.location,
      description_hu: 'leiras',
      description_en: 'leiras',
      place: this.form.place,
      isLast: false,
      date: this.form.date,
      picture: '../../assets/achievement/' + this.fileToUpload.name
    };
    this.achievements.unshift(n);
  }
}
