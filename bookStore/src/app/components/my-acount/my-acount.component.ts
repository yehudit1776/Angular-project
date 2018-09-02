import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-my-acount',
  templateUrl: './my-acount.component.html',
  styleUrls: ['./my-acount.component.css']
})
export class MyAcountComponent implements OnInit {
currentUser:User;
  constructor() { 
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
  }

}
