import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EducationBlockComponent} from "./education-block.component";



@NgModule({
  declarations: [
    EducationBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EducationBlockComponent
  ]
})
export class EducationBlockModule { }
