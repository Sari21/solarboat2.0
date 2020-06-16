import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';
import {HttpClient} from '@angular/common/http';
import {Team} from '../model/team';
import {Member} from '../model/member';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  //teams: Team[] = [];

  leaders: Team = new class implements Team {
    // tslint:disable-next-line:variable-name
    description_en: string;
    description_hu: string;
    id: number;
    leader: Member;
    members: Member[];
    name_en: string;
    name_hu: string;
    teamType: number;
  };
  electronics: Team = new class implements Team {
    description_en: string;
    description_hu: string;
    id: number;
    leader: Member;
    members: Member[];
    name_en: string;
    name_hu: string;
    teamType: number;
  };
  economics: Team = new class implements Team {
    description_en: string;
    description_hu: string;
    id: number;
    leader: Member;
    members: Member[];
    name_en: string;
    name_hu: string;
    teamType: number;
  };
  mechatronics: Team = new class implements Team {
    description_en: string;
    description_hu: string;
    id: number;
    leader: Member;
    members: Member[];
    name_en: string;
    name_hu: string;
    teamType: number;
  };
  mechatronics_material: Team = new class implements Team {
    description_en: string;
    description_hu: string;
    id: number;
    leader: Member;
    members: Member[];
    name_en: string;
    name_hu: string;
    teamType: number;
  };
  mechatronics_simulation: Team = new class implements Team {
    description_en: string;
    description_hu: string;
    id: number;
    leader: Member;
    members: Member[];
    name_en: string;
    name_hu: string;
    teamType: number;
  };
  constructor(private http: HttpClient, private apiService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
   // this.leaders = this.teams[0];
    //this.elektronics = this.teams[1];
  }

  public getTeams() {
    this.apiService.getTeams().subscribe(
        (res) => {
          var data: any = res;
         // console.log(data);
          <Team[]> data.forEach((element) => {
           // console.log(element.members);
            if (element.teamType == 1 ) {
              this.leaders = element;
            }
            if (element.teamType == 2 ) {
              this.electronics = element;
            }
            if (element.teamType == 3 ) {
              this.economics = element;
            }
            if (element.teamType == 4 ) {
              this.mechatronics = element;
            }
            if (element.teamType == 5 ) {
              this.mechatronics_material = element;
            }
            if (element.teamType == 6 ) {
              this.mechatronics_simulation = element;
            }
          });
        },
        (err) => {
          alert('get error');
        }
    );
  }

}
