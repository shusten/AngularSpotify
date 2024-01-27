import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes),
    CommonModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
