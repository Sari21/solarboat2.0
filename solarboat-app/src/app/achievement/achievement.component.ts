import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Achievement} from '../model/achievement';
import {HttpClient} from '@angular/common/http';
import {PictureService} from '../shared/picture.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AchievementService} from '../shared/achievement.service';
import {Globals} from '../globals';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  form: any = {};
  failed = false;
  errorMessage = '';
  pictureService: PictureService;
  fileToUpload: File = null;

  @Input() authority: string;
  @Input() achievement: Achievement;
  @Output() onRemove = new EventEmitter<Achievement>();
  constructor(private globals: Globals, private http: HttpClient, private apiService: AchievementService, private modalService: NgbModal, pictureService: PictureService) {
    this.pictureService = pictureService;
  }
  ngOnInit(): void {
    this.form.title_hu = this.achievement.title_hu;
    this.form.location_hu = this.achievement.location_hu;
    this.form.title_en = this.achievement.title_en;
    this.form.location_en = this.achievement.location_en;
    this.form.place_hu = this.achievement.place_hu;
    this.form.place_en = this.achievement.place_en;
    this.form.date = this.achievement.date;
  }

  delete(id: number) {
    this.onRemove.emit(this.achievement);
    //TODO: kép törlése
    const b = this.http
        .delete(this.globals.BASE_URL + '/api/achievement/'.concat(id.toString()))
        .subscribe((data) => {
        });
  }

  openContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, centered: true, size: 'lg' });
  }

  onSubmit(empForm: any, id: number) {
    this.achievement.title_hu = this.form.title_hu;
    this.achievement.location_hu = this.form.location_hu;
    this.achievement.title_en = this.form.title_en;
    this.achievement.location_en = this.form.location_en;
    this.achievement.date = this.form.date ;
    this.achievement.place_hu = this.form.place_hu;
    this.achievement.place_en = this.form.place_en;
    const achievementId = id;
    let o: Object;
    if (this.fileToUpload != null) {
      this.achievement.picture =  '../../assets/achievement/' + this.fileToUpload.name;
      this.uploadFileToActivity();
      o = {
        id: achievementId,
        title_hu: this.form.title_hu,
        location_hu: this.form.location_hu,
        title_en: this.form.title_en,
        location_en:this.form.location_en,
        description_hu: "leírás",
        description_en: "description",
        date: this.form.date,
        place_hu: this.form.place_hu,
        place_en: this.form.place_en,
        isLast: false,
        picture: '../../assets/achievement/' + this.fileToUpload.name
      };
    } else {
      o = {
        id: achievementId,
        title_hu: this.form.title_hu,
        location_hu: this.form.location_hu,
        title_en: this.form.title_en,
        location_en:this.form.location_en,
        description_hu: "leírás",
        description_en: "description",
        date: this.form.date,
        place_hu: this.form.place_hu,
        place_en: this.form.place_en,
        isLast: false,
        picture: this.achievement.picture
      };
    }
    const b = this.http
        .put(this.globals.BASE_URL + "/api/achievement", o)
        .subscribe((data) => {
        });
    this.modalService.dismissAll('put');
    this.form = empForm;
    this.form.reset();
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  uploadFileToActivity() {
    this.pictureService.postFile(this.fileToUpload, 'achievement').subscribe(data => {
      // do something, if upload success
    }, error => {
    });
  }
}
