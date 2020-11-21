import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.animate-me');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('animated');
        } else {
          // entry.target.classList.remove('animated');
        }
      });
    });
    elements.forEach(el => {
      observer.observe(el);
    });
    // this.windowScrollService.scrollY$.subscribe((data) => {
    //    this.scrollY = data;
    // });
  }

  // isVisible(id: string) {
  //   const div = document.getElementById(id);
  //   return (div.offsetTop + div.offsetHeight) < this.scrollY;
  // }
}
