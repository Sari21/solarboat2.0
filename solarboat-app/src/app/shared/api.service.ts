
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/api/news';

  constructor(private http: HttpClient) {

  }

  getNews(): Observable<News[]> {
    const url = 'http://localhost:8080/items';
    return this.http.get<News[]>(this.BASE_URL);
  }

  /*  postItem(item: News): Observable<any> {
      return  this.http.post(this.BASE_URL, item);
    }

    updateItem(item: News): Observable<any> {
      return  this.http.put(this.BASE_URL);
    }*/
}

