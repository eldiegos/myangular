import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userListService: UsersService, private router: Router) { }

  users: Observable<User[]>;

  ngOnInit(): void {
  }

  pintarUsers() {


    this.users = this.userListService.listUsers();


  }

}
