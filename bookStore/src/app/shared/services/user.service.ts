import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

add(user:User){
  debugger;
  return this.httpClient.post("http://localhost:3500/api/user",user);
}

}
