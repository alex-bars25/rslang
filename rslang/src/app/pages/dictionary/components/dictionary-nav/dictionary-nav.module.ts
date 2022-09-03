import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryNavComponent } from './dictionary-nav.component';



@NgModule({
  declarations: [
    DictionaryNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DictionaryNavComponent
  ]
})
export class DictionaryNavModule { }
