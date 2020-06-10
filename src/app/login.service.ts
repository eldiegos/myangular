import { Injectable } from '@angular/core';
import { UserLoginPost } from './model/UserLoginPost';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginPost: UserLoginPost;
  token: string;

  doRestLogin(email: string, password: string)  {

    

    this.loginPost = new UserLoginPost();

    this.loginPost.email = email;
    this.loginPost.password = password;

    

    return this.http.post("https://reqres.in/api/login", this.loginPost);
     
      
  }


}
