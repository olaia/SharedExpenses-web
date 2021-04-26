import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private balanceUrl: string;
  private addFriendUrl: string;

  constructor(private http: HttpClient) {
    this.balanceUrl = 'http://localhost:8080/friends/getBalance';
    this.addFriendUrl = 'http://localhost:8080/friends/addFriend';
   }

   public getBalance(): Observable<User[]> {
     return this.http.get<User[]>(this.balanceUrl);
   }

   public save(person: User) {
     return this.http.post<User>(this.addFriendUrl, person);
   }
}
