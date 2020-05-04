import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userUrl = "http://localhost:8080/api/user";
  //private BASE_URL = "http://solarboatteam:8080/api";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return <Observable<User[]>>this.http.get(this.userUrl);
  }
  updateUser(user: User){
   if(user.password == undefined){
     user.password = "defaultValue";
   }
    return this.http.patch(this.userUrl, user);
  }
}
