import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';
import { ButtonPageModule } from '../../../../../shared/button-main-page/button-page.module';

@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    ButtonPageModule
  ],
  exports: [
    NavMenuComponent
  ]
})
export class NavMenuModule { }
