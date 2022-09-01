import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintGameComponent } from './sprint-game.component';
import { SprintIntroModule } from './components/sprint-intro/sprint-intro.module';



@NgModule({
  declarations: [
    SprintGameComponent
  ],
  imports: [
    CommonModule,
    SprintIntroModule
  ],
  exports: [
    SprintGameComponent
  ]
})
export class SprintGameModule { }
