import { Injectable } from '@angular/core';
import { UserLoginPost } from './model/UserLoginPost';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginPost: UserLoginPost;

  doRestLogin(email: string, password: string) : any {

    this.loginPost = new UserLoginPost();

    this.loginPost.email = email;
    this.loginPost.password = password;

    

    this.http.post("https://reqres.in/api/login", this.loginPost)
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
