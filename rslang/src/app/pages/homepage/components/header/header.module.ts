import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavMenuModule } from './nav-menu/nav-menu.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavMenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
