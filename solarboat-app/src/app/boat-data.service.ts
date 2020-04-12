import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { BoatData } from "./model/boat-data";
import { DataGroup } from "./model/data-group";
import { MyCoordinates } from "./model/my-coordinates";

@Injectable({
  providedIn: "root",
})
export class BoatDataService {
  private BASE_URL = "http://localhost:8080/api/dataGroup";

  // tilt: MyCoordinates[] = [];
  constructor(private http: HttpClient) {}
  public getLastDataGroup(): DataGroup {
    var dataGroup = new DataGroup();
    this.http
      .get("http://localhost:8080/api/dataGroup/last")
      .subscribe((data) => {
        this.setData(data, dataGroup);
      });

    return dataGroup;
  }

  public getDataGroupById(id: number): DataGroup {
    var dataGroup = new DataGroup();
    this.http.get(this.BASE_URL + "/" + id).subscribe((data) => {
      this.setData(data, dataGroup);
    });

    return dataGroup;
  }

  public setData(data, dataGroup) {
    var rawData = data;
    var boatData = new BoatData();
    dataGroup.id = rawData.id;
    dataGroup.date = rawData.date;

    rawData.boatDataList.forEach((element) => {
      // this.tilt.push(element.tilt);
      boatData.tilt = element.tilt;
      boatData.acceleration = element.acceleration;
      boatData.battery = element.battery;
      boatData.compass = element.compass;
      boatData.error = element.error;
      boatData.extraTemps = element.extraTemps;
      boatData.id = element.id;
      boatData.motor = element.motor;
      dataGroup.boatDataList.push(boatData);
    });
  }
}
