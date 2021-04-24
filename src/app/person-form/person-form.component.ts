import { Component } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})

export class PersonFormComponent {
  model = new Person('oli', 'Olaia', 'Segovia');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

  newPerson() {
    this.model = new Person('oli', 'Olaia', 'S.');
  }
}
