import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-block',
  templateUrl: './statistic-block.component.html',
  styleUrls: ['./statistic-block.component.scss']
})
export class StatisticBlockComponent {

  @Input() public valueWordsToday: string;
  @Input() public valueWordsGeneral: string;

  buttonColor = '#e4e4e4';
  buttonTitle = 'Подробнее...';
  titleToday = 'Сегодня';
  titleGeneral = 'Общая';
  subText = ' из 3600'
  iconLinkToday = '../../../../../../assets/icon-day.png'
  iconLinkGeneral = '../../../../../assets/icon-m.png'
  textTittleToday = 'Слов на сегодня';
  textTittleGeneral = 'Всего выучено слов'
}
