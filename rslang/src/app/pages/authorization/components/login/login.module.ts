import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputModule } from 'src/app/shared/input/input.module';
import { ButtonPageModule } from 'src/app/shared/button-main-page/button-page.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonPageModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
