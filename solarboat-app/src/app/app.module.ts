import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { TeamComponent } from "./team/team.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { MainpageNewsComponent } from "./mainpage-news/mainpage-news.component";
import { NewsPreviewComponent } from "./news-preview/news-preview.component";
import { CoverComponent } from "./cover/cover.component";
import { NewsComponent } from "./news/news.component";
import { ScrollToModule } from "ng2-scroll-to-el";
import { BoatDataComponent } from "./boat-data/boat-data.component";
import { GraphComponent } from './graph/graph.component';
import { TiltGraphComponent } from './tilt-graph/tilt-graph.component';
import { AccelerationGraphComponent } from './acceleration-graph/acceleration-graph.component';
import { CompassGraphComponent } from './compass-graph/compass-graph.component';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    TeamComponent,
    FooterComponent,
    NavBarComponent,
    AboutusComponent,
    MainpageNewsComponent,
    NewsPreviewComponent,
    CoverComponent,
    NewsComponent,
    BoatDataComponent,
    GraphComponent,
    TiltGraphComponent,
    AccelerationGraphComponent,
    CompassGraphComponent,
    AchievementsComponent,
  ],
  // tslint:disable-next-line:max-line-length
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatTooltipModule,
    MatIconModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    ScrollToModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
