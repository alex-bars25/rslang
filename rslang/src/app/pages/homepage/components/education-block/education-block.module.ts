import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EducationBlockComponent} from "./education-block.component";
import {CardBlockModule} from "../../../../shared/card-block/card-block.module";



@NgModule({
  declarations: [
    EducationBlockComponent
  ],
  imports: [
    CommonModule,
    CardBlockModule
  ],
  exports: [
    EducationBlockComponent
  ]
})
export class EducationBlockModule { }
