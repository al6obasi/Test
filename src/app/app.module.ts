import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Routes, RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';


import { UserDataService } from './user-data.service';
import { SignupComponent } from './signup/signup.component';

const appRoutingProviders:any[] = [];

const ROUTES = [
  {
    path: 'Signup',
    component:SignupComponent   
  },
  {
    path: 'Login',
    component:LoginComponent
  } 
   ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)    
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
