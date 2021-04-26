import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MycurrencyPipe } from './pipes/custom.currencypipe';
import { ExpenseService } from './service/expense/expense.service';
import { UserService } from './service/user/user.service';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MycurrencyPipe,
    ExpenseListComponent,
    ExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    ExpenseService,
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'es' // 'de' for Germany, 'fr' for France ...
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
