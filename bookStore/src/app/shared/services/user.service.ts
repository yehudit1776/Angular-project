import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

 subject=new Subject();

add(user:User){
 
  return this.httpClient.post("http://localhost:3500/api/user",user);
}

login(userName:string,password:string)
{
  
  let js={"userName":userName,"password":password};
  return this.httpClient.post("http://localhost:3500/api/login",js);
}

}
