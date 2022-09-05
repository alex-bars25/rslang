import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardBlockComponent} from "./card-block.component";
import {BtnActionModule} from "../btn-action/btn-action.module";



@NgModule({
  declarations: [
    CardBlockComponent
  ],
  imports: [
    CommonModule,
    BtnActionModule
  ],
  exports: [
    CardBlockComponent
  ]
})
export class CardBlockModule { }
