import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintGameComponent } from './sprint-game.component';
import { SprintIntroModule } from './components/sprint-intro/sprint-intro.module';
import { SprintPlayModule } from './components/sprint-play/sprint-play.module';
import { SprintResultsModule } from './components/sprint-results/sprint-results.module';
import { HeaderModule } from '../homepage/components/header/header.module';



@NgModule({
  declarations: [
    SprintGameComponent
  ],
  imports: [
    CommonModule,
    SprintIntroModule,
    SprintPlayModule,
    SprintResultsModule,
    HeaderModule
  ],
  exports: [
    SprintGameComponent
  ]
})
export class SprintGameModule { }
