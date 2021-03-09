import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Member} from '../model/member';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TeamService} from '../shared/team.service';
import {News} from '../model/news';

interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-team-editgroup-panel',
    templateUrl: './team-editgroup-panel.component.html',
    styleUrls: ['./team-editgroup-panel.component.css']
})
export class TeamEditgroupPanelComponent implements OnInit {
    @Input() members: Member[];
    @Input() leader: Member;
    @Input() isLeader: boolean;
    @Input() teamId: number;
    @Output() onRemove = new EventEmitter();
    allmember: Member[];
    selected = null;
    newMemberId: number = null;
    constructor(private http: HttpClient, private apiService: TeamService) {
    }

    ngOnInit() {
        this.getMembers();
        this.selected = this.leader.id;
    }

    getMembers() {
        this.allmember = [];
        this.apiService.getMembers().subscribe(
            (res) => {
                // tslint:disable-next-line:prefer-const
                let data: any = res;
                <Member[]> data.forEach((element) => {
                    this.allmember.push(element);
                });
            },
            (err) => {
                alert('get error');
            }
        );
    }

    deleteMemberFromTeam(memberId: number) {
        this.apiService.removeMemberFromTeam( memberId, this.teamId).subscribe((data) => {
            console.log(data);
            this.onRemove.emit();
        });
    }
}
