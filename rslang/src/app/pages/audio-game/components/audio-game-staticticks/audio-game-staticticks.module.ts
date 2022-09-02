import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AudioGameStaticticksComponent} from "./audio-game-staticticks.component";
import {BtnActionModule} from "../../../../shared/btn-action/btn-action.module";



@NgModule({
  declarations: [AudioGameStaticticksComponent],
  imports: [
    CommonModule,
    BtnActionModule
  ],
  exports: [AudioGameStaticticksComponent]
})
export class AudioGameStaticticksModule { }
