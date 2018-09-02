import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from '../../shared/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  newUser: User;
  
  profileForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder ) {
   
  }
  ngOnInit() {
    this.profileForm = this.fb.group({
   
      userName: ['',],
      password: ['',],
    
    });
  }
  onSubmit() {
    this.submitted=true;
    if (this.profileForm.valid) {

      this.user = JSON.parse(JSON.stringify(this.profileForm.value));
      console.log(this.profileForm.value);
      console.log("user", this.user);
     

    }
  }
  
  get userName() {
    return this.profileForm.get("userName");
  }
  get password() {
    return this.profileForm.get("password");
  }



}
