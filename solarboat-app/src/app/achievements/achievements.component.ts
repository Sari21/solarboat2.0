import { Component, OnInit } from "@angular/core";
import { AchievementService } from "../shared/achievement.service";
import { Achievement } from "../model/achievement";
import {PictureService} from '../shared/picture.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {Globals} from '../globals';
import {ToastrService} from "ngx-toastr";

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
  constructor(private globals: Globals, private achievementService: AchievementService,
              private tokenStorage: TokenStorageService, pictureService: PictureService,private toastr: ToastrService) {
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
        this.showError(err.message, 'Eredmények sikertelen lekérése');
      }
    );
  }

  onDeleteAchievement(a: Achievement) {
    this.achievements = this.achievements.filter(rowObj => rowObj.id !== a.id);
  }

  onSubmit(empForm: any) {
    if (this.form.place_hu == null) {
      this.form.place_hu = ' ';
    }
    if (this.form.place_en == null) {
      this.form.place_en = ' ';
    }
    // this.uploadFileToActivity();
    const o: Object = {
        title_hu: this.form.title_hu,
        location_hu: this.form.location_hu,
        title_en: this.form.title_en,
        location_en: this.form.location_en,
        date: this.formatDate(this.form.date),
        description_hu: "leírás",
        description_en: "description",
        place_hu: this.form.place_hu,
        place_en: this.form.place_en,
        isLast: false,
          picture: '../../assets/achievement/' + this.fileToUpload.name
    };
    console.log(o);
    this.achievementService.addAchievement(o).subscribe(
        (res) => {
          this.showSuccess('Sikeres mentés');
          this.pushAchievement(res);
        },
        (err) => {
          this.showError(err.error.message, 'Sikertelen mentés');
        }
    );


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
      this.showError(error.error.message, 'Képfeltöltés hiba');
    });
  }
  private pushAchievement(object) {
    this.achievements.unshift(object);
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
  showSuccess(message) {
    this.toastr.success(message);
  }

  showError(message, title) {
    this.toastr.error(message, title);
  }

  formatDate(date) {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();

    return [date.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd
    ].join('-');
  }
}
