import { PictureService} from '../../shared/picture.service';
import { Component, OnInit, Output } from "@angular/core";


import { GalleryPicture } from "../../model/gallery-picture";


@Component({
  selector: 'app-gallery-admin',
  templateUrl: './gallery-admin.component.html',
  styleUrls: ['./gallery-admin.component.css']
})
export class GalleryAdminComponent implements OnInit {

  constructor(pictureService: PictureService) {
    this.pictureService = pictureService;
  }
  @Output() gallery: GalleryPicture[];
  newPicture: GalleryPicture;
  pictureService: PictureService;
  failed = false;
  errorMessage = '';
  picturesSelected = false;
  pic = false;
  smallPic = false;
  ngOnInit(): void {
   this.loadGallery();
   this.newPicture = new GalleryPicture();
  }
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.newPicture.picture = files.item(0).name;
    this.pic = true;
    if(this.pic && this.smallPic){
      console.log("true");
      this.picturesSelected = true;
    }
    
}
smallFileToUpload: File = null;
handleSmallFileInput(files: FileList) {
  this.smallFileToUpload = files.item(0);
  this.newPicture.smallPicture = files.item(0).name;
  this.smallPic = true;
  if(this.pic && this.smallPic){
    console.log("true");
    this.picturesSelected = true;
  }
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
    this.pictureService.postGalleryPicture(this.newPicture).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
      this.newPicture = new GalleryPicture();
      this.fileToUpload = undefined;
      this.smallFileToUpload = undefined;

}


loadGallery(){
  this.pictureService.getGallery().subscribe((res) => {
    this.gallery = res;
    //console.log(res);
    this.gallery.forEach(
      (s) => {(s.picture = "./assets/gallery/".concat(s.picture), console.log(s))}
    );
    this.gallery.forEach(
      (s) => (s.smallPicture = "./assets/gallery/".concat(s.smallPicture))
    );

  });
}

}
