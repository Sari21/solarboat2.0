import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Achievement} from '../model/achievement';
import {News} from '../model/news';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../shared/api.service';
import {PictureService} from '../shared/picture.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private http: HttpClient, private apiService: ApiService, private modalService: NgbModal, pictureService: PictureService) {
    this.pictureService = pictureService;
  }
  ngOnInit(): void {
    this.form.title = this.achievement.title_hu;
    this.form.location = this.achievement.location_hu;
    this.form.description = this.achievement.description_hu;
    this.form.date = this.achievement.date;
  }

  delete(id: number) {
    this.onRemove.emit(this.achievement);
    //TODO: kép törlése
    const b = this.http
        .delete('http://localhost:8080/api/achievement/'.concat(id.toString()))
        .subscribe((data) => {
          console.log(data);
        });
  }

  openContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, centered: true, size: 'lg' });
  }

  onSubmit(id: number) {
    this.achievement.title_hu = this.form.title;
    this.achievement.location_hu = this.form.location;
    this.achievement.description_hu = this.form.description  ;
    this.achievement.date = this.form.date ;
    const achievementId = id;
    let o: Object;
    if (this.fileToUpload != null) {
      this.achievement.picture =  '../../assets/achievement/' + this.fileToUpload.name;
      this.uploadFileToActivity();
      o = {
        id: achievementId,
        title_hu: this.form.title,
        location_hu: this.form.location,
        title_en: this.form.title,
        location_en: this.form.location,
        date: this.form.date,
        description_hu: '',
        description_en: '',
        place: this.form.place,
        isLast: false,
        picture: '../../assets/achievement/' + this.fileToUpload.name
      };
    } else {
      o = {
        id: achievementId,
        title_hu: this.form.title,
        location_hu: this.form.location,
        title_en: this.form.title,
        location_en: this.form.location,
        date: this.form.date,
        description_hu: '',
        description_en: '',
        place: this.form.place,
        isLast: false,
        picture: ''
      };
    }
    const b = this.http
        .put("http://localhost:8080/api/achievement", o)
        .subscribe((data) => {
          console.log(data);
        });
    this.modalService.dismissAll('put');
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
}
