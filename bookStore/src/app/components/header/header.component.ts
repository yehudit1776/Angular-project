import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:User;
  constructor() {
this.user=new User();
   
   }

  ngOnInit() {
    if(localStorage.getItem('currentUser'))
    this.user=JSON.parse(localStorage.getItem('currentUser'));
    else
    {
      
      
      this.user.userName="guest";
      this.user.img="";
      
    }
  }

}
