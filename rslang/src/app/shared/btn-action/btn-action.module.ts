import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BtnActionComponent} from "./btn-action.component";



@NgModule({
  declarations: [BtnActionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BtnActionComponent
  ]
})
export class BtnActionModule { }
