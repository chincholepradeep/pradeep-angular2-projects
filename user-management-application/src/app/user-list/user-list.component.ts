import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

users:any;
message:any;
user:any;
id:number;

constructor(private us:UserService,private route:ActivatedRoute) {
  console.log("UserListComponent created....");
 }

 ngOnInit() {
    console.log("UserListComponent initialized...");
    
    this.route.params.subscribe(params=>
        this.id=+params['id']
     );

     console.log(this.id);
   
     if(this.id)
    this.getUser();
else
    this.getAllUsers();

  }

 getAllUsers(){
  this.us.getAllUsers()
         .subscribe(response=>this.users=response,error=>this.message=error);    
     
  }

  getUser(){
    this.us.getUser(this.id)
           .subscribe(response=>this.user=response,error=>this.message=error);    
       
    }
  
  
  
}
