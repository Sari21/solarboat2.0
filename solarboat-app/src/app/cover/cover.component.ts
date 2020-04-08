import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor(private scrollService: ScrollToService) { }

  ngOnInit(): void {
  }

}
