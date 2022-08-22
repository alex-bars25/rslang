import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { InputModule } from 'src/app/shared/input/input.module';
import { ButtonPageModule } from 'src/app/shared/button-main-page/button-page.module';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonPageModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
