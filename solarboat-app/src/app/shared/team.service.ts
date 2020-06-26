import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { News } from "../model/news";
import { Achievement } from "../model/achievement";
import { GalleryPicture } from "../model/gallery-picture";
import {Globals} from '../globals';

@Injectable({
  providedIn: "root",
})
export class TeamService {
  private BASE_URL = this.globals.BASE_URL + "/api";
  constructor(private http: HttpClient, public globals: Globals) {}

  getTeams() {
    return this.http.get(this.BASE_URL + '/teams');
  }
}
