import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { TeamComponent } from "./team/team.component";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
const routes: Routes = [
  { path: "team", component: TeamComponent },
  { path: "", component: MainpageComponent },
  { path: "footer", component: FooterComponent },
  { path: "nav-bar", component: NavBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
