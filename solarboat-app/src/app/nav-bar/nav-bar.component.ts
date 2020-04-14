import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public page: string;

  constructor(private router: Router) {
    console.log(this.router.url);
    this.page = this.router.url;
  }

  ngOnInit(): void {
  }


}
