import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  urlUsers: string;



  listUsers(): Observable<User[]> {

    this.urlUsers = "https://reqres.in/api/users";

    return this.http.get<User[]>(this.urlUsers);
  }



}
