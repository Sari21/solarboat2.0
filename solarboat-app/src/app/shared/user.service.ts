import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private BASE_URL = "http://localhost:8080/api/user";
  //private BASE_URL = "http://solarboatteam.hu:81/api/user";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return <Observable<User[]>>this.http.get(this.BASE_URL);
  }
  updateUser(user: User){
   if(user.password == undefined){
     user.password = "defaultValue";
   }
    return this.http.patch(this.userUrl, user);
  }
}
