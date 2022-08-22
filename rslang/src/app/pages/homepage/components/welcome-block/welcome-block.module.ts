import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBlockComponent } from './welcome-block.component';



@NgModule({
  declarations: [
    WelcomeBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeBlockComponent
  ]
})
export class WelcomeBlockModule { }
