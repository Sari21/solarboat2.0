import { Injectable } from "@angular/core";
import { Sponsor } from "../model/sponsor";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SponsorService {
  BASE_URL = "http://localhost:8080/api/sponsor";

  constructor(private http: HttpClient) {}
  getSponsors(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.BASE_URL);
  }
}
