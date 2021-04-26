import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'listexpenses', component: ExpenseListComponent },
  { path: 'adduser', loadChildren: () => import('./components/adduser/adduser.module').then(m => m.AdduserModule) },
  { path: 'addexpense', loadChildren: () => import('./components/addexpense/addexpense.module').then(m => m.AddexpenseModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
