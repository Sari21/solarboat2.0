import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { TeamComponent } from "./team/team.component";
import { NewsComponent } from "./news/news.component";
import { BoatDataComponent } from "./boat-data/boat-data.component";
import { AchievementsComponent } from "./achievements/achievements.component";
import { SponsorsComponent } from "./sponsors/sponsors.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { CanActivate } from "@angular/router";
import { AuthGuardService as AuthGuard } from "./shared/auth-guard.service";
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user", component: UserComponent },

  { path: "admin", component: AdminComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "signup", component: RegisterComponent },
  { path: "team", component: TeamComponent },
  { path: "mainpage", component: MainpageComponent },
  { path: "news", component: NewsComponent },
  { path: "sponsors", component: SponsorsComponent },
  { path: "boatdata", component: BoatDataComponent, canActivate: [AuthGuard] },
  { path: "achievements", component: AchievementsComponent },
  { path: "", redirectTo: "/mainpage", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
