import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioGameLevelsComponent} from "./audio-game-levels.component";



@NgModule({
  declarations: [AudioGameLevelsComponent],
  imports: [
    CommonModule
  ],
  exports: [ AudioGameLevelsComponent]
})
export class AudioGameLevelsModule { }
