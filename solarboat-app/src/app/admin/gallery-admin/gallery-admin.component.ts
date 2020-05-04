import { Component, OnInit } from '@angular/core';
import { PictureService} from '../../shared/picture.service';

@Component({
  selector: 'app-gallery-admin',
  templateUrl: './gallery-admin.component.html',
  styleUrls: []
})
export class GalleryAdminComponent implements OnInit {

  constructor(pictureService : PictureService) { 
    this.pictureService = pictureService;
  }
  pictureService: PictureService;
  ngOnInit(): void {
  }
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
}
uploadFileToActivity() {
  this.pictureService.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}
}
