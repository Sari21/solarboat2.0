import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { TeamComponent } from "./team/team.component";
import { NewsComponent } from "./news/news.component";
import { BoatDataComponent } from "./boat-data/boat-data.component";
import { AchievementsComponent } from "./achievements/achievements.component";
import { SponsorsComponent } from "./sponsors/sponsors.component";
import { RegisterComponent } from "./admin/register/register.component";
import { LoginComponent } from "./login/login.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { AuthGuardService as AuthGuard } from "./shared/auth-guard.service";
import { RoleGuardService as RoleGuard } from "./shared/role-guard.service";
import { UsersComponent } from "./admin/users/users.component";
import{GalleryAdminComponent} from './admin/gallery-admin/gallery-admin.component';
const routes: Routes = [
  { path: "gallery/admin", component: GalleryAdminComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "signup", component: RegisterComponent },
  { path: "team", component: TeamComponent },
  { path: "mainpage", component: MainpageComponent },
  { path: "news", component: NewsComponent },
  { path: "sponsors", component: SponsorsComponent },
  {
    path: "boatdata",
    component: BoatDataComponent,
  },
  { path: "achievements", component: AchievementsComponent },
  { path: "users", component: UsersComponent },
  { path: "", redirectTo: "/mainpage", pathMatch: "full" },
  { path: "**", redirectTo: "/mainpage" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
