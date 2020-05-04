import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) {}
  postFile(fileToUpload: File)  {
    const BASE_URL = 'http://localhost:8080/uploadFile';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('path', 'gallery' );
    return this.http.post(BASE_URL, formData);
     
}
}
