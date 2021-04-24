import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: PersonService) {
      this.user = new Person();
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList(){
    this.router.navigate(['users'])
  }

}
