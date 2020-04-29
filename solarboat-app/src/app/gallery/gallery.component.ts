import { Component, OnInit, Output } from "@angular/core";

import { ApiService } from "../shared/api.service";
import { GalleryPicture } from "../model/gallery-picture";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }
  gallery: GalleryPicture[];
  @Output() apiService: ApiService;
  ngOnInit(): void {
    this.apiService.getGallery().subscribe((res) => {
      this.gallery = res;
      this.gallery.forEach(
        (s) => (s.picture = "../../assets/gallery/".concat(s.picture))
      );
      this.gallery.forEach(
        (s) => (s.smallPicture = "../../assets/gallery/".concat(s.smallPicture))
      );
    });
  }
}
