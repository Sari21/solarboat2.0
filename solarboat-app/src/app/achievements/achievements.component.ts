import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../shared/api.service';
import {Achievement} from '../model/achievement';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[] = [];
  constructor(
      private http: HttpClient,
      private apiService: ApiService) {}
  ngOnInit(): void {
    this.getAchievements();
  }

  public getAchievements() {
    this.apiService.getAchievements().subscribe(
        res => {
          this.achievements = res;
        },
        err => {
          alert('get error');
        }
    );
  }

}
