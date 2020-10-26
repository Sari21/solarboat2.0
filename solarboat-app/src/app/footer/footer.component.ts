import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
