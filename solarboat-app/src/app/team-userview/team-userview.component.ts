import { Component, OnInit } from '@angular/core';
import {Team} from '../model/team';
import {HttpClient} from '@angular/common/http';
import {TeamService} from '../shared/team.service';
import {News} from '../model/news';
// import * as data from '../../assets/team/team.json';

@Component({
  selector: 'app-team-userview',
  templateUrl: './team-userview.component.html',
  styleUrls: ['./team-userview.component.css']
})
export class TeamUserviewComponent implements OnInit {
  teams: Team[] = [];

  leaders: Team;
  electronics: Team;
  economics: Team;
  mechatronics: Team ;
  mechatronicsMaterial: Team ;
  mechatronicsSimulation: Team ;
  constructor(private http: HttpClient, private apiService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
    // this.leaders = this.teams[0];
    //this.elektronics = this.teams[1];
  }

  public getTeams() {
    // this.apiService.getTeams().subscribe(
    //     (res) => {
    //       // tslint:disable-next-line:prefer-const
    //       let data: any = res;
    //       console.log(data);
    //       <Team[]> data.content.forEach((element) => {
    //         this.teams.push(element);
    //       });
    //     },
    //     (err) => {
    //       alert('get error');
    //     }
    // );
     this.apiService.getTeams().subscribe(
         (res) => {
           let data: any = res;
           console.log(data);
           <Team[]> data.forEach((element) => {
            // console.log(element.members);
             if (element.teamType === 1 ) {
               this.leaders = element;
             }
             if (element.teamType === 2 ) {
               this.electronics = element;
             }
             if (element.teamType === 3 ) {
               this.economics = element;
             }
             if (element.teamType === 4 ) {
               this.mechatronics = element;
             }
             if (element.teamType === 5 ) {
               this.mechatronicsMaterial = element;
             }
             if (element.teamType === 6 ) {
               this.mechatronicsSimulation = element;
             }
           });
         },
         (err) => {
           alert('get error');
         }
     );
    // this.leaders = data.leaders;
    // this.electronics = data.electronics;
    // this.economics = data.economics;
    // this.mechatronics = data.mechatronics;
    // this.mechatronicsMaterial = data.mechatronics_material;
    // this.mechatronicsSimulation = data.mechatronics_simulation;
  }

}

