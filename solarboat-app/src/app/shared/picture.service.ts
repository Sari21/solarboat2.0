import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {GalleryPicture} from "../model/gallery-picture";
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient, public globals: Globals) {}

  BASE_URL = this.globals.BASE_URL;

  postFile(fileToUpload: File, directory: string)  {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('path', directory );
    return this.http.post(this.BASE_URL.concat("/api/file/uploadFile"), formData);
  }
  postSponsorLogo(fileToUpload: File)  {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('path', 'sponsors' );
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

  deleteGalleryPicture(id: number){
    return this.http.delete(this.BASE_URL.concat("/api/gallery/").concat(id.toString()));
  }
  deletePicture(filename: string){
    return this.http.delete(this.BASE_URL.concat("/deleteFile/").concat(filename));
  }
}
