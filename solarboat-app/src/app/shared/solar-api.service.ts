import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolarApiService {
  watts: number;
  constructor(private http: HttpClient) {}

  public  getCurrentSolarpower() {
    this.http
        .get('https://api.forecast.solar/estimate/watts/47.475498098/19.05333312/0/0/0.312')
        .subscribe((data) => {
          this.watts = 0; // number
          this.watts = this.setWatts(data);
          console.log('service 1' + this.watts);
          return this.watts;
          //console.log(this.setWatts(data));
          //return this.setWatts(data);
        });
  }

  /*public setWatts(data) {

  }*/

  private setWatts(data) {
    const rawData = data;
    const date = new Date();
    const month = 1 + date.getMonth();
    // dátum + óra: "2020-04-14 05"
    const currentDateHours = date.getFullYear() + '-' + addZero(month) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours());
    console.log(currentDateHours);

    // tslint:disable-next-line:only-arrow-functions
    Object.keys(rawData.result).forEach(function(element) {
      console.log(element, rawData.result[element]);

      if ( element.substring(0, 13) == currentDateHours.toString()) {
        console.log(element);
        console.log('if 1 ' + rawData.result[element]);
        return rawData.result[element];
      }
    });
    function addZero(i: number) {
      if (i < 10) {
        return '0' + i;
      }
      return i;
    }
  }
}

