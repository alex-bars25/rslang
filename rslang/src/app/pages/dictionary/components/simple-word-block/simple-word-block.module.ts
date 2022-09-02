import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleWordBlockComponent } from './simple-word-block.component';
import { ButtonPageModule } from '../../../../shared/button-main-page/button-page.module';


@NgModule({
  declarations: [
    SimpleWordBlockComponent
  ],
  imports: [
    CommonModule,
    ButtonPageModule
  ],
  exports: [
    SimpleWordBlockComponent
  ]
})
export class SimpleWordBlockModule { }
