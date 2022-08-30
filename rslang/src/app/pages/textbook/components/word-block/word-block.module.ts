import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordBlockComponent } from './word-block.component';
import { ButtonPageModule } from '../../../../shared/button-main-page/button-page.module';


@NgModule({
  declarations: [
    WordBlockComponent
  ],
  imports: [
    CommonModule,
    ButtonPageModule 
  ],
  exports: [
    WordBlockComponent
  ],
})
export class WordBlockModule { }
