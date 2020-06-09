import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;


  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {

    this.email = "eve.holt@reqres.in";
    this.password = "cityslicka";
  }

  doLogin() {

    let token: string;

    token = this.loginService.doRestLogin(this.email, this.password);
    
    if(token!=null && token.trim.length!=0){

      console.log(token);
      this.router.navigate(['users']);

    }

    else {
      this.router.navigate(['/']);
    }

  }


 
}
