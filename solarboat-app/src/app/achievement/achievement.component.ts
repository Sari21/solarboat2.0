import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Achievement} from '../model/achievement';
import {PictureService} from '../shared/picture.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AchievementService} from '../shared/achievement.service';
import {Globals} from '../globals';
import {ToastrService} from "ngx-toastr";

// import AOS from 'aos';

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
    maxDate: Date;

    constructor(private globals: Globals, private apiService: AchievementService,
                private modalService: NgbModal, pictureService: PictureService, private toastr: ToastrService) {
        this.pictureService = pictureService;
        const currentYear = new Date().getFullYear();
        this.maxDate = new Date(currentYear + 1, 11, 31);
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
        this.apiService.deleteAchievement(id).subscribe(
            (res) => {
                this.showSuccess('Sikeres törlés');
            },
            (err) => {
                this.showError(err.message, 'Sikertelen törlés');
            }
        );
    }

    openContent(longContent) {
        this.modalService.open(longContent, {scrollable: true, centered: true, size: 'lg'});
    }

    onSubmit(empForm: any, id: number) {
        this.achievement.title_hu = this.form.title_hu;
        this.achievement.location_hu = this.form.location_hu;
        this.achievement.title_en = this.form.title_en;
        this.achievement.location_en = this.form.location_en;
        this.achievement.date = this.form.date ? this.globals.formatDate(this.form.date) : this.achievement.date;
        this.achievement.place_hu = this.form.place_hu;
        this.achievement.place_en = this.form.place_en;
        const achievementId = id;
        if (this.fileToUpload != null) {
            this.achievement.picture = '../../assets/achievement/' + this.fileToUpload.name;
            this.uploadFileToActivity();
        }
        const o = {
            id: achievementId,
            title_hu: this.form.title_hu,
            location_hu: this.form.location_hu,
            title_en: this.form.title_en,
            location_en: this.form.location_en,
            description_hu: "leiras",
            description_en: "description",
            date: this.form.date ? this.globals.formatDate(this.form.date) : this.achievement.date,
            place_hu: this.form.place_hu,
            place_en: this.form.place_en,
            isLast: false,
            picture: this.fileToUpload != null ? '../../assets/achievement/' + this.fileToUpload.name : this.achievement.picture
        };
        this.apiService.updateAchievement(o).subscribe(
            (res) => {
                this.showSuccess('Sikeres mentés');
            },
            (err) => {
                this.showError(err.message, 'Sikertelen mentés');
            }
        );
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

    showSuccess(message) {
        this.toastr.success(message);
    }

    showError(message, title) {
        this.toastr.error(message, title);
    }
}
