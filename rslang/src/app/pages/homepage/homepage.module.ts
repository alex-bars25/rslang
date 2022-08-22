import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { LogoModule } from './components/logo/logo.module';
import {BtnActionModule} from "./components/education-block/btn-action/btn-action.module";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
