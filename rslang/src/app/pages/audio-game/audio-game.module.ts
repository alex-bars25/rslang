import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioGameComponent} from "./audio-game.component";
import {HeaderModule} from "../homepage/components/header/header.module";
import {FooterBlockModule} from "../homepage/components/footer-block/footer-block.module";
import {AudioGameLevelsModule} from "./components/audio-game-levels/audio-game-levels.module";
import {AudioGamePlayModule} from "./components/audio-game-play/audio-game-play.module";
import {AudioGameStaticticksModule} from "./components/audio-game-staticticks/audio-game-staticticks.module";

@NgModule({
  declarations: [
    AudioGameComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterBlockModule,
    AudioGameLevelsModule,
    AudioGamePlayModule,
    AudioGameStaticticksModule

  ],
  exports: [
    AudioGameComponent
  ]
})
export class AudioGameModule { }
