import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import {TokenStorageService} from "../auth/token-storage.service";
import { RoleType } from "../model/role-type.enum";
@Injectable()
export class AuthGuardService implements CanActivate {
  // constructor(public auth: AuthService, public router: Router) {}
  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(["login"]);
  //     return false;
  //   }
  //   return true;
  // }
  constructor(private router : Router,   
    private tokenStorage: TokenStorageService, ) {
  }
  authority: string;
  roles: string[];

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
      this.checkAuth();
      console.log(this.authority);
      console.log(RoleType.User);
      console.log(RoleType.Admin);
      console.log(this.authority == RoleType.User);
      console.log(this.authority == RoleType.Admin);
      console.log(this.authority == RoleType.User || this.authority == RoleType.Admin)
      console.log(route.data.roles);

      //check some condition  
      if (!(this.authority == RoleType.User || this.authority == RoleType.Admin))  {
          alert('You are not allowed to view this page');
          this.router.navigate(["admin"]);
          //redirect to login/home page etc
          //return false to cancel the navigation
          return false;
      } 
      else{
        if(route.data.roles){
          if(route.data.roles == this.authority){
          return true;
          }
          else{
            return false;
          }
        }
        else{
          return true;
        }
      }
  }

  checkAuth() {
    this.authority = undefined;
    if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getAuthorities();
        console.log(this.roles);
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
