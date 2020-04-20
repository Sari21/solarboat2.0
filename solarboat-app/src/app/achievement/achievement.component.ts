import {Component, Input, OnInit} from '@angular/core';
import {Achievement} from '../model/achievement';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  @Input() achievement: Achievement;
  constructor() { }

  ngOnInit(): void {
  }

}
