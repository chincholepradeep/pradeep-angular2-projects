import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserTableComponent implements OnInit {

  users:any;
  message:any;
  
  constructor(private us:UserService) {
    console.log("UserListComponent created....");
   }
  
   ngOnInit() {
      console.log("UserListComponent initialized...");
      this.getAllUsers();
    }
  
   getAllUsers(){
    this.us.getAllUsers()
           .subscribe(response=>this.users=response,error=>this.message=error);    
       
    }

}
