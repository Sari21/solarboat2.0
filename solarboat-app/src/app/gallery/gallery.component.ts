import { PictureService } from "../shared/picture.service";
import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

import { TokenStorageService } from "../auth/token-storage.service";

import { GalleryPicture } from "../model/gallery-picture";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  constructor(
    pictureService: PictureService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    this.pictureService = pictureService;
  }
  @Output() gallery: GalleryPicture[];
  newPicture: GalleryPicture;
  pictureService: PictureService;
  failed = false;
  errorMessage = "";
  picturesSelected = false;
  pic = false;
  smallPic = false;
  public authority: string;
  public roles: string[];
  ngOnInit(): void {
    this.checkAuth();
    this.loadGallery();
    this.newPicture = new GalleryPicture();
  }
  fileToUpload: File;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.newPicture.picture = files.item(0).name;
    this.pic = true;
    if (this.pic && this.smallPic) {
      console.log("true");
      this.picturesSelected = true;
    }
  }
  smallFileToUpload: File;
  handleSmallFileInput(files: FileList) {
    this.smallFileToUpload = files.item(0);
    this.newPicture.smallPicture = files.item(0).name;
    this.smallPic = true;
    if (this.pic && this.smallPic) {
      console.log("true");
      this.picturesSelected = true;
    }
  }

  uploadFileToActivity() {
    this.pictureService.postFile(this.fileToUpload, "gallery").subscribe(
      (data) => {
        // do something, if upload success
        this.fileToUpload = null;
        console.log("pic");
      },
      (error) => {
        console.log(error);
      }
    );
    this.pictureService.postFile(this.smallFileToUpload, "gallery").subscribe(
      (data) => {
        // do something, if upload success
        this.smallFileToUpload = null;
        console.log("sm");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  uploadGalleryPicture() {
    this.pictureService.postGalleryPicture(this.newPicture).subscribe(
      (data) => {
        // do something, if upload success
        this.uploadFileToActivity();
        this.newPicture = new GalleryPicture();
        this.gallery.push(data);
        //this.loadGallery();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadGallery() {
    console.log("loaded");
    this.pictureService.getGallery().subscribe((res) => {
      this.gallery = res;
      //console.log(res);
      this.gallery.forEach((s) => {
        s.picture = "./assets/gallery/".concat(s.picture);
      });
      this.gallery.forEach(
        (s) => (s.smallPicture = "./assets/gallery/".concat(s.smallPicture))
      );
    });
  }
  delete(id: number) {
    //var pic = this.gallery.find((g) => g.id == id);
    /*this.pictureService.deletePicture(pic.picture).subscribe(
      (data) => {
        // do something, if upload success
        console.log("pic");
        //this.loadGallery();
      },
      (error) => {
        console.log(error);
      }
    );
    this.pictureService.deletePicture(pic.smallPicture).subscribe(
      (data) => {
        // do something, if upload success
        console.log("smallpic");
        //this.loadGallery();
      },
      (error) => {
        console.log(error);
      }
    );
    */

    this.pictureService.deleteGalleryPicture(id).subscribe(
      (data) => {
        // do something, if upload success
        var du = this.gallery.find((a) => a.id == id);
        const index = this.gallery.indexOf(du, 0);
        if (index > -1) {
          this.gallery.splice(index, 1);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  clickMethod(id: number) {
    if (confirm("Are you sure to delete " + id.toString())) {
      this.delete(id);
    }
  }
  checkAuth() {
    this.authority = undefined;
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every((role) => {
        if (role === "ROLE_ADMIN") {
          this.authority = "admin";
          return false;
        }
        this.authority = "user";
        return true;
      });
    }
  }
  isEnabled(form: boolean){
    return (form && this.smallFileToUpload && this.fileToUpload);
  }
}
