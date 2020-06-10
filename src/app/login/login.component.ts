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

    this.loginService.doRestLogin(this.email, this.password)
      .subscribe(
        (data) => {
          console.log("POST call successful value returned in body", JSON.stringify(data));
          var obj = JSON.parse(JSON.stringify(data));
          token = obj.token;

          if (token != null) {

            console.log(token);
            sessionStorage.setItem(this.email, token);
            this.router.navigate(['users']);

          }

          else {
            this.router.navigate(['/']);
          }

        },

        response => {
          console.log("POST call in error", response);
          this.router.navigate(['/']);
        },

        () => {
          console.log("The POST observable is now completed.");
        });




  }



}
