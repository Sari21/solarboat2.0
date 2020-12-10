import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import 'rxjs/add/observable/interval';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  public  sub: Subscription;
  public watts;
  welcome: string;
  constructor(private scrollService: ScrollToService,  private http: HttpClient, 
    public translate: TranslateService) { 
    }

  ngOnInit(): void {
    this.getWatts();
    this.sub = Observable.interval(6000000)
        .subscribe((val) => {
          const storageData = sessionStorage.getItem('solarpower');
          if (storageData != null) {
            const data = JSON.parse(storageData);
            this.watts = this.setWatts(data);
          }
        });

  }



  public getWatts() {

    const storageData = sessionStorage.getItem('solarpower');
    if (storageData === null) {
      this.http
          .get('https://api.forecast.solar/estimate/watts/47.475498098/19.05333312/0/0/2.1')
          .subscribe((data) => {
            this.watts = this.setWatts(data);
            sessionStorage.setItem('solarpower', JSON.stringify(data));
            return this.watts;
          });
    } else {
      const data = JSON.parse(sessionStorage.getItem('solarpower'));
      this.watts = this.setWatts(data);
      return this.watts;
    }
  }


  private setWatts(data) {
    let watts = 0;
    const rawData = data;
    const date = new Date();
    const month = 1 + date.getMonth();
    // dátum + óra: "2020-04-14 05"
    const currentDateHours = date.getFullYear() + '-' + addZero(month) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours());
   // const currentDateHours = '2020-04-15 10';

    // tslint:disable-next-line:only-arrow-functions
    Object.keys(rawData.result).forEach(function(element) {

      if ( element.substring(0, 13) == currentDateHours.toString()) {
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
