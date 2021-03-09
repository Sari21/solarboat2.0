import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeamService} from '../shared/team.service';
import {Member} from '../model/member';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PictureService} from '../shared/picture.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-team-editmembers',
    templateUrl: './team-editmembers.component.html',
    styleUrls: ['./team-editmembers.component.css']
})
export class TeamEditmembersComponent implements OnInit {
    members: Member[] = [];


    form: any = {};
    failed = false;
    errorMessage = '';
    fileToUpload: File = null;

    constructor(private http: HttpClient, private apiService: TeamService, private modalService: NgbModal,
                private pictureService: PictureService) {
    }

    ngOnInit(): void {
        this.getMembers();
    }

    getMembers() {
        this.members = [];
        this.apiService.getMembers().subscribe(
            (res) => {
                // tslint:disable-next-line:prefer-const
                let data: any = res;
                <Member[]> data.forEach((element) => {
                    this.members.push(element);
                });
            },
            (err) => {
                alert('get error');
            }
        );
    }

    openEditMemberForm(content, member) {
        this.form = JSON.parse(JSON.stringify(member));
        this.modalService.open(content, {scrollable: true, centered: true, size: 'lg'});
    }

    openAddMemberForm(content) {
        this.form = {};
        this.modalService.open(content, {scrollable: true, centered: true, size: 'lg'});
    }

    onSubmit(EditForm: NgForm) {
        if (this.fileToUpload) {
            this.form.picture = '../../assets/members/' + this.fileToUpload.name;
            this.uploadFileToActivity();
            this.fileToUpload = null;
        }
        this.apiService.updateMember(this.form).subscribe((data) => {
            this.getMembers();
        });
        this.modalService.dismissAll('put');
        this.form = null;

    }

    onSubmitAddForm(AddForm: any) {
        if (this.fileToUpload) {
            this.form.picture = '../../assets/members/' + this.fileToUpload.name;
            this.uploadFileToActivity();

            this.apiService.addMember(this.form).subscribe((data) => {
                this.members.push(data);
            });
            this.modalService.dismissAll('put');
            this.form = null;
            this.fileToUpload = null;
        }
    }


    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFileToActivity() {
        this.pictureService.postFile(this.fileToUpload, 'members').subscribe(data => {
        }, error => {
        });
    }


    deleteMember(id: any) {
        this.apiService.deleteMember(id).subscribe((data) => {
            console.log(data);
            this.getMembers();
        });
        this.modalService.dismissAll('put');
        this.form = null;
    }
}
