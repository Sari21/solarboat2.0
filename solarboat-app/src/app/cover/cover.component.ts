import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  public watts;
  constructor(private scrollService: ScrollToService,  private http: HttpClient) { }

  ngOnInit(): void {
    this.getWatts();
  }

  public getWatts() {
    this.http
        .get('https://api.forecast.solar/estimate/watts/47.475498098/19.05333312/0/0/0.312')
        .subscribe((data) => {
          this.watts = 0; // number
          this.watts = this.setWatts(data);
          console.log('service ' + this.watts);
          return this.watts;
        });
  }


  private setWatts(data) {
    let watts = 0;
    const rawData = data;
    const date = new Date();
    const month = 1 + date.getMonth();
    // dátum + óra: "2020-04-14 05"
    const currentDateHours = date.getFullYear() + '-' + addZero(month) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours());
   // const currentDateHours = '2020-04-15 10';
    console.log(currentDateHours);

    // tslint:disable-next-line:only-arrow-functions
    Object.keys(rawData.result).forEach(function(element) {
      console.log(element, rawData.result[element]);

      if ( element.substring(0, 13) == currentDateHours.toString()) {
        console.log(element);
        console.log('if 1 ' + rawData.result[element]);
        watts = rawData.result[element];
      }
    });
    function addZero(i: number) {
      if (i < 10) {
        return '0' + i;
      }
      return i;
    }
    return watts;
  }

}
