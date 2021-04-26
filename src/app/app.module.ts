import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import Big from 'big.js';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './service/user.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MycurrencyPipe } from './pipes/custom.currencypipe';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    MycurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    {
      provide: LOCALE_ID,
      useValue: 'es' // 'de' for Germany, 'fr' for France ...
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
