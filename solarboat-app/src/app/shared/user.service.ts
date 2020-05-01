import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = "http://localhost:8080/api";
  //private BASE_URL = "http://solarboatteam:8080/api";
  private userUrl = this.BASE_URL + '/test/user';
  private pmUrl = this.BASE_URL + '/test/pm';
  private adminUrl = this.BASE_URL + '/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
