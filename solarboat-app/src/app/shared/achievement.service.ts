import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { News } from "../model/news";
import { Achievement } from "../model/achievement";
import { GalleryPicture } from "../model/gallery-picture";

@Injectable({
  providedIn: "root",
})
export class AchievementService {
  private BASE_URL = "http://localhost:8080/api";
  //private BASE_URL = "http://solarboatteam.hu:81/api";
  constructor(private http: HttpClient) {}

  getAchievements(pageNum: number) {
    return this.http.get(
        this.BASE_URL + "/achievement/page/".concat(pageNum.toString())
    );
  }

}
