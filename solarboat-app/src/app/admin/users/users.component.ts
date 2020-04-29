import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../model/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  constructor(user: UserService) {
    this.userService = user;
  }
  users: User[];
  userService: UserService;
  ngOnInit(): void {
    this.userService.getUsers().subscribe((t) => {
      this.users = t;
      console.log(t);
    });
  }
}
