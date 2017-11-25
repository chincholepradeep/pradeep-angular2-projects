import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { ModuleWithProviders } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';

const routes: Routes = [

  {path:"home",component:UserListComponent},
  {path:"list",component:UserListComponent},
  {path:"table",component:UserTableComponent},
  {path:"users/:id",component:UserListComponent},
  
  {path:"**",redirectTo:"/home"},
  


           ];
export const ListTableRoutingModule:ModuleWithProviders=
                             RouterModule.forRoot(routes);

