import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense/expense';
import { ExpenseService } from 'src/app/service/expense/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['../../../assets/forms.css']
})
export class ExpenseFormComponent {

  expense: Expense;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService) {
      this.expense = new Expense();
    }

  onSubmit(){
    this.expenseService.addExpense(this.expense).subscribe(result => this.gotoExpenseList());
  }
  gotoExpenseList() {
    this.router.navigate(['listexpenses']);
  }

}
