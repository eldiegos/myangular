import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../model/User';
import { UserPost } from '../model/UserPost';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {


  user: User;

  id: number;

  info: string;

  alias: string;
  job: string;

  constructor(route: ActivatedRoute, private userService: UsersService) {
    this.id = parseInt(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    this.userService.getUser(this.id).subscribe(data => {
      var obj = JSON.parse(JSON.stringify(data));
      this.user = obj.data;
    });
  }



  doEdit() {

    let userPost: UserPost;
    userPost = new UserPost();
    userPost.name = this.alias;
    userPost.job = this.job;


    this.userService.updateUser(this.user, userPost)
      .subscribe(data => {
        userPost = JSON.parse(JSON.stringify(data));
    
        if (userPost.updatedAt != undefined && userPost.updatedAt != null) {
          this.info = "EXITO!!!!!";
        }
        else {
          this.info = "FAIL!!!!!";
        }
      });

  }

  doDelete() {

    this.userService.deleteUser(this.user)
      .subscribe(data => { 
        console.log(data.status);
      });

  }



}
