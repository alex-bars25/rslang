import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticBlockComponent } from './statistic-block.component';
import { ButtonPageModule } from '../../../../shared/button-main-page/button-page.module';
import { StatisticCardModule } from './statistic-card/statistic-card.module';

@NgModule({
  declarations: [
    StatisticBlockComponent
  ],
  imports: [
    CommonModule,
    ButtonPageModule,
    StatisticCardModule
  ],
  exports: [
    StatisticBlockComponent
  ]
})
export class StatisticBlockModule { }
