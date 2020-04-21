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
  pageNumber: number = 0;
  isLastPage: boolean = false;
  constructor(
      private http: HttpClient,
      private apiService: ApiService) {}
  ngOnInit(): void {
    this.getAchievements();
  }

  public getAchievements() {
    this.apiService.getAchievements(this.pageNumber).subscribe(
        // tslint:disable-next-line:prefer-const
        res => { let data: any = res;
          <Achievement[]>data.content.forEach((element) => {
          this.achievements.push(element);
        });
          this.pageNumber++;
          this.isLastPage = data.last;
        },
        err => {
          alert('get error');
        }
    );
  }

  public sortby(date: string) {
    return this.achievements.sort((a, b) => a[date] < b[date] ? 1 : a[date] === b[date] ? 0 : -1);
  }
}
