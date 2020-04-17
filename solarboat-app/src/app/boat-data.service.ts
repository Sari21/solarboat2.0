import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BoatData } from "./model/boat-data";
import { DataGroup } from "./model/data-group";
import { MyCoordinates } from "./model/my-coordinates";
import { ConditionalExpr } from "@angular/compiler";
import { Dates } from "./model/dates";
import { Http, ResponseContentType } from "@angular/http";

@Injectable({
  providedIn: "root",
})
export class BoatDataService {
  private BASE_URL = "http://localhost:8080/api/dataGroup";

  // tilt: MyCoordinates[] = [];
  constructor(private http: HttpClient) {}

  public getDataGroupById(id: number) {
    return this.http.get(
      this.BASE_URL.concat("/response/").concat(id.toString())
    );
  }

  public getLastDataGroup() {
    return this.http.get(this.BASE_URL);
  }
  public getDate() {
    return this.http.get<Dates[]>(this.BASE_URL.concat("/ids"));
  }
  public exportDataById(id: number) {
    return this.http.get(
      this.BASE_URL.concat("/export/").concat(id.toString())
    );
  }
}
