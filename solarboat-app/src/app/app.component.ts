import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "./auth/token-storage.service";
import { TranslateService} from "@ngx-translate/core"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "solarboat-app";
  public roles: string[];
  public authority: string;

  constructor(private tokenStorage: TokenStorageService,  public translate: TranslateService) { 
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hu/) ? browserLang : 'en'); }

  ngOnInit() {
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
