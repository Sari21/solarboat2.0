import { Component, OnInit } from "@angular/core";
import { SponsorService } from "../shared/sponsor.service";
import { Sponsor } from "../model/sponsor";
import { PictureService } from "../shared/picture.service";
import { TokenStorageService } from "../auth/token-storage.service";
@Component({
  selector: "app-sponsors",
  templateUrl: "./sponsors.component.html",
  styleUrls: ["./sponsors.component.css"],
})
export class SponsorsComponent implements OnInit {
  constructor(
    private sponsorService: SponsorService,
    private pictureService: PictureService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.checkAuth();
    this.getSponsores();
    
  }
  allSponsors: Sponsor[] = [];
  main: Sponsor[] = [];
  top: Sponsor[] = [];
  other: Sponsor[] = [];
  uni = [];
  partner: Sponsor[] = [];
  bme: Sponsor = new Sponsor();
  newSponsor: Sponsor = new Sponsor();
  failed = false;
  errorMessage: string;
  fileToUpload: File = null;
  types = ["MAIN", "TOP", "OTHER", "PARTNER", "UNI"];
  public authority: string;
  public roles: string[];
  getSponsores() {
    this.sponsorService.getSponsors().subscribe(
      (res) => {
        this.allSponsors = res;
        this.allSponsors.forEach(
          (s) => (s.picture = "../../assets/sponsors/".concat(s.picture))
        );
        this.splitSponsores();
      },
      (err) => {
        alert("get error");
      }
    );
  }
  splitSponsores() {
    this.main = this.allSponsors.filter((s) => s.group == "MAIN");
    this.top = this.allSponsors.filter((s) => s.group == "TOP");
    this.other = this.allSponsors.filter((s) => s.group == "OTHER");
    this.partner = this.allSponsors.filter((s) => s.group == "PARTNER");
    this.bme = this.allSponsors.filter(
      (s) => s.group == "UNI" && s.row == 1
    )[0];
    this.uni = [];
    for (let i = 2; i < 10; i++) {
      let t: Sponsor[] = this.allSponsors.filter(
        (s) => s.group == "UNI" && s.row == i
      );
      if (t != undefined) {
        this.uni.push(t);
      }
    }
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this.sponsorService.postSponsor(this.newSponsor).subscribe(
      (data) => {
        this.uploadFileToActivity();
        this.allSponsors.push(data);
        this.splitSponsores();
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.newSponsor.picture = files.item(0).name;
  }
  uploadFileToActivity() {
    // console.log("fileupload");
    this.pictureService.postSponsorLogo(this.fileToUpload).subscribe(
      (data) => {
        // do something, if upload success
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  delete(id: number) {
    this.sponsorService.deleteSponsor(id).subscribe(
      (data) => {
        var du = this.allSponsors.find((a) => a.id == id);
        const index = this.allSponsors.indexOf(du, 0);
        if (index > -1) {
          this.allSponsors.splice(index, 1);
        }
        this.splitSponsores();
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  clickMethod(id: number) {
    var name: string;
    this.allSponsors.forEach((t) => {
      if (t.id == id) name = t.name;
    });
    if (
      confirm(
        "Biztos, hogy törölni szeretnéd a következő szponzort: " + name + "?"
      )
    ) {
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
}
