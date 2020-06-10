import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../model/User';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {


  user: User;

  id: number;

  info: string;

  constructor(route: ActivatedRoute, private userService: UsersService) {
    this.id = parseInt(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    this.userService.getUser(this.id)  .subscribe(data => {
      var obj = JSON.parse(JSON.stringify(data));
      this.user = obj.data;
    });
  }



  doEdit() {

    this.userService.updateUser(this.user)
    .subscribe(data => {
      var obj = JSON.parse(JSON.stringify(data));
      this.user = obj.data;
      this.info ="EXITO!!!!!";
    });

  }

  doDelete() {

    this.userService.updateUser(this.user) 
      .subscribe(data => {
      var obj = JSON.parse(JSON.stringify(data));
      this.user = obj.data;
      this.info ="EXITO!!!!!";
    });

  }


  
}
