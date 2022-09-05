import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { LogoModule } from './components/logo/logo.module';
import { DescriptionModule } from './components/description/description.module';
import { WelcomeBlockModule } from './components/welcome-block/welcome-block.module';
import { AboutBlockModule } from './components/about-block/about-block.module';
import { CardBlockModule } from "../../shared/card-block/card-block.module";
import { PageContainerModule } from 'src/app/shared/page-container/page-container.module';
import { StatisticBlockModule } from './components/statistic-block/statistic-block.module';
import {GamesBlockModule} from "./components/games-block/games-block.module";
import {EducationBlockModule} from "./components/education-block/education-block.module";
import {FooterBlockModule} from "./components/footer-block/footer-block.module";
import {HeaderModule} from "./components/header/header.module";

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    PageContainerModule,
    LogoModule,
    WelcomeBlockModule,
    DescriptionModule,
    AboutBlockModule,
    CardBlockModule,
    StatisticBlockModule,
    GamesBlockModule,
    CardBlockModule,
    EducationBlockModule,
    FooterBlockModule,
    HeaderModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
