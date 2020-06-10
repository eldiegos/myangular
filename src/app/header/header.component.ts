import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
  }

  isSessionActve(): boolean{

    return this.loginService.isSessionActive();
  }
  

  doLogout(){

    this.loginService.doCloseSession();
    this.router.navigate(['/']);
  }

}
