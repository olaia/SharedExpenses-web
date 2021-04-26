import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';
import { User } from '../../model/user/user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])],
      'lastname': ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(userForm) {
    this.formSubmitted = true;

    if (this.form.valid) {
        let username = this.form.controls['username'].value;
        let name = this.form.controls['name'].value;
        let lastname = this.form.controls['lastname'].value;

        //OLAIA
        let user = new User();
        user.username = username;
        user.name = name;
        user.lastname = lastname;
        //OLAIA

        let user$ = this.userService.save(user);

        user$.subscribe(
            (data: any) => console.log(data),
            err => console.error(err)
        );
    } else {
        console.log("The form is NOT valid");
        this.formSubmitted = false;
    }
}
}
