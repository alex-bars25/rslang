import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioGameComponent} from "./audio-game.component";

@NgModule({
  declarations: [
    AudioGameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AudioGameComponent
  ]
})
export class AudioGameModule { }
