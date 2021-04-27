import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/model/expense/expense';
import { ExpenseService } from 'src/app/service/expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['../../../assets/tables.css']
})
export class ExpenseListComponent implements OnInit {

  expenses: Expense[];
  displayedColumns: string[] = ['username', 'description', 'date', 'amount'];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.expenseService.getAllExpenses().subscribe( data => {
      this.expenses = data;
      this.expenses.forEach( element => {
        element.date = element.date * 1000;
      })
      });
  }

}

