import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffWordBlockComponent } from './diff-word-block.component';
import { ButtonPageModule } from '../../../../shared/button-main-page/button-page.module';


@NgModule({
  declarations: [
    DiffWordBlockComponent
  ],
  imports: [
    CommonModule,
    ButtonPageModule 
  ],
  exports: [
    DiffWordBlockComponent
  ]
})
export class DiffWordBlockModule { }
