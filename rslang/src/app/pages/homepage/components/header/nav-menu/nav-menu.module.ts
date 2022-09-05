import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';
import { ButtonPageModule } from '../../../../../shared/button-main-page/button-page.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    ButtonPageModule,
    FormsModule
  ],
  exports: [
    NavMenuComponent
  ]
})
export class NavMenuModule { }
