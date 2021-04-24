import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {

  private balanceUrl: string;

  constructor(private http: HttpClient) {
    this.balanceUrl = 'http://localhost:8080/friends/getBalance';
   }

   public getBalance(): Observable<Person[]> {
     return this.http.get<Person[]>(this.balanceUrl);
   }

   public save(person: Person) {
     return this.http.post<Person>(this.balanceUrl, person);
   }
}
