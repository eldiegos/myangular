import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {



  id: number;
  constructor(route: ActivatedRoute) {
    this.id = parseInt(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
