import { Component, OnInit, Input } from "@angular/core";
import { TokenStorageService } from "./auth/token-storage.service";
import { TranslateService} from "@ngx-translate/core"
import { WebSocketAPI } from './WebSocketAPI';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "solarboat-app";
  public roles: string[];
  public authority: string;
  webSocketAPI: WebSocketAPI;
  greeting: any;
  @Input() name: string;
  tomb = ['alma', 'korte']

  constructor(private tokenStorage: TokenStorageService,  public translate: TranslateService) { 
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hu/) ? browserLang : 'en'); }
//TODO: ??????????????????????????????????
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(this);

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

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message){
    this.greeting = message;
    this.tomb.push(message.content);
    console.log(message);
  }
}
