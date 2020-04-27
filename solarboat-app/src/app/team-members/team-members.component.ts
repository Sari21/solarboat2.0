import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../model/member';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {
  @Input() members: Member[];
  @Input() leader: Member;
  @Input() isLeader: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
