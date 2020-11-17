import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent {

  @ViewChild('circle') circle: ElementRef;
  styleRotate: SafeStyle;
  angle: number;
  name = 'Compass';
  @Input('compass') 
  set compass(compass){
    console.log(compass);
     // if(compass.x && compass.y){
        this.setCompass(compass.x, compass.y);
      //}
  }  
  constructor(private sanitizer: DomSanitizer){ }
    setCompass(x, y){
      console.log({x, y});
      let circle;
      console.log({x, y});
        circle = this.circle.nativeElement;
        this.angle = Math.atan2(y, x) * (180 / Math.PI); // Calculate Angle between circle center and mouse pos
        if (this.angle < 0) {
          this.angle = 360 + this.angle; // Always show angle positive
        }
        this.angle = Math.round(this.angle);
        this.styleRotate = this.sanitizer.bypassSecurityTrustStyle(`transform: rotate(${this.angle}deg)`);           
    }
}
