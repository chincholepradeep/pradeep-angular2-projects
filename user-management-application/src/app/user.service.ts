import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UserService {

private baseURL="https://jsonplaceholder.typicode.com/users";

  constructor(private http:Http) { 
    console.log("USer Service created....")
  }

  getAllUsers():Observable<Response>{
     return this.http.get(this.baseURL)
          .map(response=>response.json())
          .catch(error=>error.json());
  }

  getUser(id:number):Observable<Response>{
    return this.http.get(this.baseURL+"/"+id)
         .map(response=>response.json())
         .catch(error=>error.json());
 }

}
