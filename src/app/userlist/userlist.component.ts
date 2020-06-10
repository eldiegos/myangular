import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from '../model/User';





@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  users: User[];

  ngOnInit(): void {

    this.userService.listUsers()
      .subscribe(data => {
        var obj = JSON.parse(JSON.stringify(data));
        this.users = obj.data;
      });

    console.log(this.users);


  }


}
