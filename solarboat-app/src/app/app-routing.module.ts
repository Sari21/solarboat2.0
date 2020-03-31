import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { TeamComponent } from "./team/team.component";
import { FooterComponent } from "./footer/footer.component";

const routes: Routes = [
  { path: "team", component: TeamComponent },
  { path: "", component: MainpageComponent },
  { path: "footer", component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
