import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextbookNavComponent } from './textbook-nav.component';



@NgModule({
  declarations: [
    TextbookNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextbookNavComponent
  ]
})
export class TextbookNavModule { }
