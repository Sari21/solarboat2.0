import { PictureService} from '../../shared/picture.service';
import { Component, OnInit, Output } from "@angular/core";


import { GalleryPicture } from "../../model/gallery-picture";

@Component({
  selector: 'app-gallery-admin',
  templateUrl: './gallery-admin.component.html',
  styleUrls: ['./gallery-admin.component.css']
})
export class GalleryAdminComponent implements OnInit {

  constructor(pictureService : PictureService) { 
    this.pictureService = pictureService;
  }
  pictureService: PictureService;
  ngOnInit(): void {
   this.loadGallery()
  }
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    
}
smallFileToUpload: File = null;
handleSmallFileInput(files: FileList) {
  this.smallFileToUpload = files.item(0);
  
}

uploadFileToActivity() {
  this.pictureService.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
  this.pictureService.postFile(this.smallFileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}

@Output() gallery: GalleryPicture[];

loadGallery(){
  this.pictureService.getGallery().subscribe((res) => {
    this.gallery = res;
    console.log(res);
    this.gallery.forEach(
      (s) => {(s.picture = "../../../src/assets/gallery/".concat(s.picture))}
    );
    this.gallery.forEach(
      (s) => (s.smallPicture = "../../../src/assets/gallery/".concat(s.smallPicture))
    );
  console.log(this.gallery);
  });
}
}
