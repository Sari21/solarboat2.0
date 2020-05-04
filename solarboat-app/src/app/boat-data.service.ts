import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  //private BASE_URL = "http://solarboatteam.hu:81/api/dataGroup";
  private BASE_URL = "http://localhost:8080/api/dataGroup";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "fda66d02-9f2f-492e-9327-64bc68a7e509",
    }),
  };
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
  public deleteAll() {
    this.http.delete(this.BASE_URL).subscribe((res) => {});
  }
  public deleteById(id: number) {
    this.http
        .delete(this.BASE_URL + '/' + id.toString() )
      .subscribe((res) => {});
  }
}
