import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTableComponent } from './user-table/user-table.component';

import {ListTableRoutingModule} from "./list-table/list-table-routing.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {UserService} from "./user.service";


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    ListTableRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
