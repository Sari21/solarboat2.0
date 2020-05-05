import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {GalleryPicture} from "../model/gallery-picture";

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:8080';

  postFile(fileToUpload: File)  {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('path', 'gallery' );
    return this.http.post(this.BASE_URL.concat("/api/file/uploadFile"), formData);
  }
  getGallery(): Observable<GalleryPicture[]> {
    return <Observable<GalleryPicture[]>>(
      this.http.get(this.BASE_URL + "/api/gallery")
    );
  }

  postGalleryPicture(picture : GalleryPicture): Observable<GalleryPicture>{
    return <Observable<GalleryPicture>>this.http.post(this.BASE_URL.concat("/api/gallery"), picture)
  }
}
