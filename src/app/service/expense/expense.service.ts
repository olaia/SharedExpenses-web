import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/model/expense/expense';

@Injectable()
export class ExpenseService {

  private addExpenseUrl: string;
  private getAllExpensesUrl: string;

  constructor(private http: HttpClient) {
    this.addExpenseUrl = 'http://localhost:8080/expenses/addExpense';
    this.getAllExpensesUrl = 'http://localhost:8080/expenses/getAll';
   }

   public addExpense(expense: Expense) {
     expense.date = new Date().getTime();
     return this.http.post<Expense>(this.addExpenseUrl, expense);
   }

   public getAllExpenses(): Observable<Expense[]> {
     return this.http.get<Expense[]>(this.getAllExpensesUrl);
   }
}
