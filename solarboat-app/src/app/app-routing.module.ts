import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { TeamComponent } from "./team/team.component";
import { NewsComponent } from "./news/news.component";

const routes: Routes = [
  { path: "team", component: TeamComponent },
  { path: "mainpage", component: MainpageComponent },
  { path: "news", component: NewsComponent },
  { path: "",
    redirectTo: '/mainpage',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
