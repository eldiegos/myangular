import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userListService: UsersService, private router: Router) { }

  users: User[];

  ngOnInit(): void {

    this.userListService.listUsers()
      .subscribe(data => {
        var obj = JSON.parse(JSON.stringify(data));
        this.users = obj.data;
      });

    console.log(this.users);


  }


}
