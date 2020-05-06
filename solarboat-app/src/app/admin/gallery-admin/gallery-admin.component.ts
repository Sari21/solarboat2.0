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
      this.fileToUpload = null;
      console.log("pic");

      }, error => {
        console.log(error);
      });
    this.pictureService.postFile(this.smallFileToUpload).subscribe(data => {
      // do something, if upload success
      this.smallFileToUpload = null;
      console.log("sm")

      }, error => {
        console.log(error);
      });
   
}
uploadGalleryPicture(){
  this.pictureService.postGalleryPicture(this.newPicture).subscribe(data => {
    // do something, if upload success
    this.newPicture = new GalleryPicture();
    this.loadGallery();
    }, error => {
      console.log(error);
    });
}


loadGallery(){
  console.log("loaded");
  this.pictureService.getGallery().subscribe((res) => {
    this.gallery = res;
    //console.log(res);
    this.gallery.forEach(
      (s) => {(s.picture = "./assets/gallery/".concat(s.picture) )}
    );
    this.gallery.forEach(
      (s) => (s.smallPicture = "./assets/gallery/".concat(s.smallPicture))
    );

  });
}
delete(id: number){
  var pic = this.gallery.find(g => g.id == id);
  this.pictureService.deletePicture(pic.picture).subscribe(data => {
    // do something, if upload success
    console.log("pic");
  this.loadGallery();
    }, error => {
      console.log(error);
    });
  this.pictureService.deletePicture(pic.smallPicture).subscribe(data => {
    // do something, if upload success
    console.log("smallpic");
  this.loadGallery();
    }, error => {
      console.log(error);
    });
 
  this.pictureService.deleteGalleryPicture(id).subscribe(data => {
    // do something, if upload success
    console.log("gallery");
  this.loadGallery();
    }, error => {
      console.log(error);
    });
}
clickMethod(id: number) {
  if(confirm("Are you sure to delete "+id.toString())) {
    this.delete(id);
  }
}

}
