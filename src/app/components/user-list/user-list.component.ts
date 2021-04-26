import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private personService: UserService) { }

  ngOnInit(): void {
    this.personService.getBalance().subscribe( data => {
      this.users = data;
    });
  }

}
