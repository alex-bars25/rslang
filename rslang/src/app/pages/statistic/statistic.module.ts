import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';
import {FooterBlockModule} from "../homepage/components/footer-block/footer-block.module";
import {HeaderModule} from "../homepage/components/header/header.module";
import { PageContainerModule } from '../../shared/page-container/page-container.module';

@NgModule({
  declarations: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    FooterBlockModule,
    HeaderModule,
    PageContainerModule
  ],
  exports: [
    StatisticComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class StatisticModule { }
