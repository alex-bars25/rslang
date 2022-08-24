import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-block',
  templateUrl: './education-block.component.html',
  styleUrls: ['./education-block.component.scss']
})
export class EducationBlockComponent implements OnInit {

  titleEducationBook: string = 'Учебник';
  titleEducationDiction: string = 'Словарь';
  educationImgBook: string = "./assets/educ-book.jpg";
  educationImgDiction: string = "./assets/educ-dictionary.jpg";
  bookIssue: string = 'Более 3500 слов для изучения, разбитых на конкретные разделы по уровню твоей подготовки с удобной навигацией между собой';
  dictionIssue: string = 'Создай свой персональный словарь для изучения слов, где ты можешь добавлять новые слова или удалять изученные слова';
  educBtnTitle: string = 'Вперед'
  bookImgSrc: string = "./assets/book-elec.svg";
  dictionaryImgSrc: string = "./assets/vocab.svg";


  constructor() { }

  ngOnInit(): void {
  }

}
