import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioGameComponent} from "./audio-game.component";
import {HeaderModule} from "../homepage/components/header/header.module";
import {FooterBlockModule} from "../homepage/components/footer-block/footer-block.module";
import {AudioGameLevelsModule} from "./audio-game-levels/audio-game-levels.module";
import {AudioGamePlayModule} from "./audio-game-play/audio-game-play.module";

@NgModule({
  declarations: [
    AudioGameComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterBlockModule,
    AudioGameLevelsModule,
    AudioGamePlayModule

  ],
  exports: [
    AudioGameComponent
  ]
})
export class AudioGameModule { }