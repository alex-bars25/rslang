import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GamesBlockComponent} from "./games-block.component";
import {CardBlockModule} from "../../../../shared/card-block/card-block.module";



@NgModule({
  declarations: [
    GamesBlockComponent
  ],
  imports: [
    CommonModule,
    CardBlockModule
  ],
  exports: [
    GamesBlockComponent
  ]
})
export class GamesBlockModule { }
