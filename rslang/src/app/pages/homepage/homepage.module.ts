import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { LogoModule } from './components/logo/logo.module';
import {CardBlockModule} from "../../shared/card-block/card-block.module";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    CardBlockModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
