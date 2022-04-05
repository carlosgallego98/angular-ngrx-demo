import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule
  ]
})
export class AuthModule { }
