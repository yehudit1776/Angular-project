import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { JsonPipe } from '../../../../node_modules/@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  newUser: User;

  profileForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService) {
   
    localStorage.removeItem("currentUser");
    this.userService.subject.next();
  }
  ngOnInit() {
    this.userService.subject.next();
    this.profileForm = this.fb.group({

      userName: ['',],
      password: ['',],

    });



  }
  onSubmit() {
    this.submitted = true;
    if (this.profileForm.valid) {


      console.log(this.profileForm.value);
      console.log("user", this.user);
      this.userService.login(this.userName.value, this.password.value).subscribe(data => {
        console.log("data", data);
        this.user = JSON.parse(JSON.stringify(data));
        if (this.user) {
          localStorage.setItem("currentUser", JSON.stringify(this.user));
          this.userService.subject.next();
        }
      });

    }
  }

  get userName() {
    return this.profileForm.get("userName");
  }
  get password() {
    return this.profileForm.get("password");
  }



}
