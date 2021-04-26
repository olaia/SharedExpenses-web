import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from 'src/app/model/expense/expense';
import { ExpenseService } from 'src/app/service/expense/expense.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'amount': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.nullValidator])]
    });
  }

  onSubmit(expenseForm) {
    this.formSubmitted = true;

    if (this.form.valid) {
        let username = this.form.controls['username'].value;
        let amount = this.form.controls['amount'].value;
        let description = this.form.controls['description'].value;

        //OLAIA
        let expense = new Expense();
        expense.username = username;
        expense.amount = amount;
        expense.description = description;
        //OLAIA

        let user$ = this.expenseService.addExpense(expense);

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
