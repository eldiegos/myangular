import { Component, OnInit } from '@angular/core';
import { UserLoginPost } from '../model/UserLoginPost';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;

  loginPost: UserLoginPost;

  constructor(private http: HttpClient) {

    this.loginPost = new UserLoginPost();

  }

  ngOnInit(): void {
  }


  doLogin() {

    this.loginPost.email = this.email;
    this.loginPost.password = this.password;


    let mypost = JSON.stringify(this.loginPost);
    console.log(mypost);

    this.http.post("https://reqres.in/api/login", mypost)
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }


}
