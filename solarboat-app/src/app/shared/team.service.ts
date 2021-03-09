import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../model/news';
import {Achievement} from '../model/achievement';
import {GalleryPicture} from '../model/gallery-picture';
import {Globals} from '../globals';
import * as team from '../../assets/team/team.json';
import {Member} from '../model/member';

@Injectable({
    providedIn: 'root',
})
export class TeamService {
    private BASE_URL = this.globals.BASE_URL + '/api';

    constructor(private http: HttpClient, public globals: Globals) {
    }

    getTeams() {
        return this.http.get(this.BASE_URL + '/team');
    }

    getMembers() {
        return this.http.get(this.BASE_URL + '/member');
    }

    updateMember(member: Member) {
        return this.http
            .put(this.globals.BASE_URL + '/api/member/' + member.id, member);
    }

    addMember(member: any): Observable<any> {
        return this.http
            .post(this.globals.BASE_URL + '/api/member', member);
    }

    removeMemberFromTeam(memberId: number, teamId: number) {
       return this.http
            .delete(this.globals.BASE_URL + '/api/team/' + teamId + '/members/' + memberId);
    }

    deleteMember(memberId: any) {
        return this.http
            .delete(this.globals.BASE_URL + '/api/member/' + memberId);
    }
}
