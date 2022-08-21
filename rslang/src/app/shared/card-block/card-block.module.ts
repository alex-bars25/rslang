import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardBlockComponent} from "./card-block.component";

@NgModule({
  declarations: [
    CardBlockComponent
  ]
  ,
  imports: [
    CommonModule,
  ],
  exports: [
    CardBlockComponent
  ]
})
export class CardBlockModule { }
