import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { LogoModule } from './components/logo/logo.module';
import {BtnActionModule} from "../../shared/btn-action/btn-action.module";
import { EducationBlockComponent } from './components/education-block/education-block/education-block.component';


@NgModule({
  declarations: [
    HomepageComponent,
    EducationBlockComponent
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
