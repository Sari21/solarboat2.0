import { Component, OnInit } from "@angular/core";
import { SponsorService } from "../shared/sponsor.service";
import { Sponsor } from "../model/sponsor";
import { PictureService } from "../shared/picture.service";
import { TokenStorageService } from "../auth/token-storage.service";
import { AllSponsors } from "../model/all-sponsors";
import { BreadcrumbModule } from "angular-bootstrap-md";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
// import AOS from 'aos';
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
    // AOS.init();
    this.checkAuth();
    this.getSponsors();
  }
  allSponsors: AllSponsors;
  sponsorListToUpdateOrder: Sponsor[];
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
  files: File[] = [];
  types = ["MAIN", "TOP", "OTHER", "PARTNER", "UNI"];

  public authority: string;
  public roles: string[];
  getSponsors() {
    this.sponsorService.getSponsors().subscribe(
      (res) => {
        this.allSponsors = res;
        this.allSponsors.main.forEach(
          (s) => (s.picture = "../../assets/sponsors/".concat(s.picture))
        );
        this.allSponsors.top.forEach(
          (s) => (s.picture = "../../assets/sponsors/".concat(s.picture))
        );
        this.allSponsors.uni.forEach(
          (s) => (s.picture = "../../assets/sponsors/".concat(s.picture))
        );
        this.allSponsors.other.forEach(
          (s) => (s.picture = "../../assets/sponsors/".concat(s.picture))
        );
        this.allSponsors.partner.forEach(
          (s) => (s.picture = "../../assets/sponsors/".concat(s.picture))
        );
        this.splitSponsors();
      },
      (err) => {
        alert("get error");
      }
    );
  }
  splitSponsors() {
    // this.main = this.allSponsors.filter((s) => s.group == "MAIN");
    // this.top = this.allSponsors.filter((s) => s.group == "TOP");
    // this.other = this.allSponsors.filter((s) => s.group == "OTHER");
    // this.partner = this.allSponsors.filter((s) => s.group == "PARTNER");
    this.bme = this.allSponsors.uni.filter((s) => s.row == 1)[0];
    this.uni = [];
    for (let i = 2; i < 10; i++) {
      let t: Sponsor[] = this.allSponsors.uni.filter(
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
        switch (data.group) {
          case "main":
            this.allSponsors.main.push(data);
            break;
          case "top":
            this.allSponsors.top.push(data);
            break;
          case "other":
            this.allSponsors.other.push(data);
            break;
          case "partner":
            this.allSponsors.main.push(data);
            break;
          case "uni":
            this.allSponsors.main.push(data);
            this.splitSponsors();
            break;
          default:
            break;
        }
        this.splitSponsors();
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  // handleFileInput(files: FileList) {
  //   this.fileToUpload = this.files[0];
  //   this.newSponsor.picture = this.files[0].name;
  // }
  uploadFileToActivity() {
    this.pictureService.postSponsorLogo(this.files[0]).subscribe(
      (data) => {
        // do something, if upload success
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  delete(sponsor: Sponsor) {
    this.sponsorService.deleteSponsor(sponsor.id).subscribe(
      (data) => {
        switch (sponsor.group) {
          case "main":
            this.allSponsors.main.splice(this.allSponsors.main.indexOf(sponsor), 1);
            break;
          case "top":
            this.allSponsors.top.splice(this.allSponsors.top.indexOf(sponsor), 1);
            break;
          case "other":
            this.allSponsors.other.splice(this.allSponsors.other.indexOf(sponsor), 1);
            break;
          case "partner":
            this.allSponsors.partner.splice(this.allSponsors.partner.indexOf(sponsor), 1);
            break;
          case "uni":
            this.allSponsors.uni.splice(this.allSponsors.uni.indexOf(sponsor), 1);
            this.splitSponsors();
            break;
          default:
            break;
        }
        
        // var du = this.allSponsors.find((a) => a.id == id);
        // const index = this.allSponsors.indexOf(du, 0);
        // if (index > -1) {
        //   this.allSponsors.splice(index, 1);
        // }
        // this.splitSponsores();
      },
      (error) => {
        // console.log(error);
      }
    );
  }
  
  clickMethod(sponsor: Sponsor) {
    // var name: string;
    // this.allSponsors.forEach((t) => {
    //   if (t.id == id) name = t.name;
    // });
    if (
      confirm(
        "Biztos, hogy törölni szeretnéd a következő szponzort: " + sponsor.name + "?"
      )
    ) {
      this.delete(sponsor);
    }
  }
  onSelect(event) {
    if (this.files.length > 0) {
      this.files = [];
    }
    this.files.push(...event.addedFiles);
    this.newSponsor.picture = this.files[0].name;
    console.log(this.newSponsor);
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
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

  dropMain(event: CdkDragDrop<Sponsor[]>) {
    moveItemInArray(this.allSponsors.main, event.previousIndex, event.currentIndex);
    this.updateSponsors();
  }
  dropTop(event: CdkDragDrop<Sponsor[]>) {
    moveItemInArray(this.allSponsors.top, event.previousIndex, event.currentIndex);
    this.updateSponsors();
  }
  dropOther(event: CdkDragDrop<Sponsor[]>) {
    moveItemInArray(this.allSponsors.other, event.previousIndex, event.currentIndex);
    this.updateSponsors();
  }
  dropPartner(event: CdkDragDrop<Sponsor[]>) {
    moveItemInArray(this.allSponsors.partner, event.previousIndex, event.currentIndex);
    this.updateSponsors();
  }
  updateSponsors(){
    this.sponsorListToUpdateOrder = [];
    this.setOrderNumber(this.allSponsors.main);
    this.setOrderNumber( this.allSponsors.top);    
    this.setOrderNumber( this.allSponsors.other);
    this.setOrderNumber( this.allSponsors.partner);
 
    this.sponsorService.updateOrder(this.sponsorListToUpdateOrder).subscribe(
      (data) => {
        // do something, if upload success
      },
      (error) => {
         console.log(error);
      }
    );
  }

  setOrderNumber(sponsorsToAdd: Sponsor[]){
    let i = 0;
    sponsorsToAdd.forEach(s => {
      s.orderNumber = i;
      i++;
      this.sponsorListToUpdateOrder.push(s);
    })

  }
}
