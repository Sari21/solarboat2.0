import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeamService} from '../shared/team.service';
import {Member} from '../model/member';

@Component({
    selector: 'app-team-editmembers',
    templateUrl: './team-editmembers.component.html',
    styleUrls: ['./team-editmembers.component.css']
})
export class TeamEditmembersComponent implements OnInit {
    members: Member[] = [];

    constructor(private http: HttpClient, private apiService: TeamService) {
    }

    ngOnInit(): void {
        this.getMembers();
    }

    getMembers() {
        this.apiService.getMembers().subscribe(
            (res) => {
                // tslint:disable-next-line:prefer-const
                let data: any = res;
                console.log('tagok');
                console.log(data);
                <Member[]> data.forEach((element) => {
                    console.log(element);
                    this.members.push(element);
                });
            },
            (err) => {
                alert('get error');
            }
        );
    }


}
