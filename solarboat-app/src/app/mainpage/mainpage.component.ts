import { Component, OnInit } from "@angular/core";
import { ScrollToService } from 'ng2-scroll-to-el';


@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})

export class MainpageComponent implements OnInit {
  constructor(private scrollService: ScrollToService) { }

  ngOnInit(): void {
  }
}
