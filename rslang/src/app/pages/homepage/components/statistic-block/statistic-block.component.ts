import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWord, userWord } from '../../../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-statistic-block',
  templateUrl: './statistic-block.component.html',
  styleUrls: ['./statistic-block.component.scss']
})
export class StatisticBlockComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  userId: string = localStorage.getItem('userId')!;

  valueWordsToday: string = '0';
  valueWordsGeneral: string = '0';

  buttonColor = '#e4e4e4';
  buttonTitle = 'Подробнее...';
  titleToday = 'Сегодня';
  titleGeneral = 'Общая';
  subText = ' из 3600'
  iconLinkToday = 'assets/icon-day.png'
  iconLinkGeneral = 'assets/icon-m.png'
  textTittleToday = 'Выучено за текущую сессию';
  textTittleGeneral = 'Всего выучено слов'

  public goToStatisticPage() {
    this.router.navigateByUrl("/statistic");
  }

  ngOnInit(): void {
    this.valueWordsToday = localStorage.getItem('studWords')!;
    this.valueWordsGeneral = '0';
    this.api.getUserWords(this.userId).subscribe((userWords: userWord[]) => {
      userWords.forEach((word): void => {
        if (word.difficulty === "false") {
          this.valueWordsGeneral = (+this.valueWordsGeneral + 1).toString();
        }
      });
    })
  }
}
