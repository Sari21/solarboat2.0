import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/user.service";
import { User } from "../../model/user";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {Role} from "../../model/role";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  constructor(user: UserService, private modalService: NgbModal) {
    this.userService = user;
  }
  users: User[];
  userService: UserService;
  editUser: User;
  editing = false;
  closeResult = "";
  selectedUser: User;
  originalUser: User;
  isAdmin: boolean;
  ngOnInit(): void {
    this.loadUsers()
  }
  edit(user: User) {
    this.editing = true;
    console.log(user);
  }
  
  open(content, id: number) {
    this.selectedUser = this.users.find(t => t.id == id);
   // this.selectedUser = {...this.originalUser};
    
    
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  submit(){
   
      if(this.selectedUser.admin){
        this.selectedUser.roles = [new Role("ROLE_ADMIN"), new Role("ROLE_USER")]
      }
      else{
        this.selectedUser.roles = [, new Role("ROLE_USER")]
      }
    
    //this.originalUser = this.selectedUser;
    this.userService.updateUser(this.selectedUser).subscribe((data)=>{

      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  loadUsers(){
    this.userService.getUsers().subscribe((t) => {
      this.users = t;
      this.users.forEach(u => {
        console.log(u);
        u.admin = false;
        u.roles.forEach((role) => {
          console.log(role);
          if (role.name === "ROLE_ADMIN") {
            u.admin = true;
            console.log(role);
           
          }
         
        });
        console.log(u.admin);
    });
  });
}
}
