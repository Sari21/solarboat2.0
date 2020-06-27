import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AchievementService } from "../shared/achievement.service";
import { Achievement } from "../model/achievement";
import {News} from '../model/news';
import {PictureService} from '../shared/picture.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {Globals} from '../globals';

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",

  styleUrls: ["./achievements.component.css"],
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[] = [];
  pageNumber = 0;
  isLastPage = false;
  form: any = {};
  failed = false;
  errorMessage = '';
  pictureService: PictureService;
  fileToUpload: File = null;
  authority: string;
  roles: string[];
  constructor(private globals: Globals, private http: HttpClient, private achievementService: AchievementService,
              private tokenStorage: TokenStorageService, pictureService: PictureService) {
    this.pictureService = pictureService;
  }

  ngOnInit(): void {
    this.getAchievements();
    this.checkAuth();
  }

  public getAchievements() {
    this.achievementService.getAchievements(this.pageNumber).subscribe(
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
  onSubmit(empForm: any) {
    this.uploadFileToActivity();
    const o: Object = {
        title_hu: this.form.title_hu,
        location_hu: this.form.location_hu,
        title_en: this.form.title_en,
        location_en: this.form.location_en,
        date: this.form.date,
        description_hu: "leírás",
        description_en: "description",
        place: this.form.place,
      isLast: false,
        picture: '../../assets/achievement/' + this.fileToUpload.name
      };
    const b = this.http
        .post(this.globals.BASE_URL + "/api/achievement", o)
        .subscribe((data) => {
          console.log(data);
        });
    this.pushAchievement();
    this.form = empForm;
    this.form.reset();
    this.fileToUpload = null;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  uploadFileToActivity() {
    this.pictureService.postFile(this.fileToUpload, 'achievement').subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }
  private pushAchievement() {
    let n: Achievement;
    if(this.fileToUpload != null) {
      n = {
        id: this.achievements.length,
        title_hu: this.form.title_hu,
        location_hu: this.form.location_hu,
        title_en: this.form.title_en,
        location_en: this.form.location_en,
        description_hu: "leírás",
        description_en: "description",
        place: this.form.place,
        isLast: false,
        date: this.form.date,
        picture: '../../assets/achievement/' + this.fileToUpload.name
      };
    } else {
      n = {
        id: this.achievements.length,
        title_hu: this.form.title_hu,
        location_hu: this.form.location_hu,
        title_en: this.form.title_en,
        location_en: this.form.location_en,
        description_hu: "leírás",
        description_en: "description",
        place: this.form.place,
        isLast: false,
        date: this.form.date,
        picture: ''
      };
    }
    this.achievements.unshift(n);
  }
  checkAuth() {
    this.authority = undefined;
    if (this.tokenStorage.getToken()) {
      let roles = this.tokenStorage.getAuthorities();
      roles.every((role) => {
        if (role === "ROLE_ADMIN") {
          this.authority = "admin";
          return false;
        }
        this.authority = "user";
        return true;
      });
    }
  }
}
