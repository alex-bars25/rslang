import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { LogoModule } from './components/logo/logo.module';
import { DescriptionModule } from './components/description/description.module';
import { WelcomeBlockModule } from './components/welcome-block/welcome-block.module';
import { AboutBlockModule } from './components/about-block/about-block.module';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    LogoModule,
    WelcomeBlockModule,
    DescriptionModule,
    AboutBlockModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
