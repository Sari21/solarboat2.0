import { Component, OnInit, Output } from "@angular/core";
import { SponsorService } from "../shared/sponsor.service";
import { Sponsor } from "../model/sponsor";

@Component({
  selector: "app-sponsors",
  templateUrl: "./sponsors.component.html",
  styleUrls: ["./sponsors.component.css"],
})
export class SponsorsComponent implements OnInit {
  constructor(private sponsorService: SponsorService) {}

  ngOnInit(): void {
    this.getSponsores();
  }
  allSponsors: Sponsor[] = [];
  main: Sponsor[] = [];
  top: Sponsor[] = [];
  other: Sponsor[] = [];
  @Output() uni: Sponsor[] = [];
  partner: Sponsor[] = [];
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
    this.uni = this.allSponsors.filter((s) => s.group == "UNI");
  }
}
