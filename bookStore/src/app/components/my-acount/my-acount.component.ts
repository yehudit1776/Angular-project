import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-my-acount',
  templateUrl: './my-acount.component.html',
  styleUrls: ['./my-acount.component.css']
})
export class MyAcountComponent implements OnInit {
currentUser:User;
  constructor(private userService:UserService) { 
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
    this.userService.subject.subscribe({next:()=>{ this.currentUser=JSON.parse(localStorage.getItem("currentUser"));}})
    
  }

  ngOnInit() {
  
  }

}
