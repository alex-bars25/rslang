import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioGamePlayComponent} from "./audio-game-play.component";



@NgModule({
  declarations: [AudioGamePlayComponent],
  imports: [
    CommonModule
  ],
  exports: [AudioGamePlayComponent]
})
export class AudioGamePlayModule { }
