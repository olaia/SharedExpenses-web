import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  users: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getBalance().subscribe( data => {
      this.users = data;
    });
  }

}
