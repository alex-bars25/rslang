import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbook',
  templateUrl: './textbook.component.html',
  styleUrls: ['./textbook.component.scss']
})
export class TextbookComponent implements OnInit {

  page = 1
  shadow =  {'box-shadow': 'inset 0 0 20px rgb(154, 243, 207)'};

  changeBG (color: string): void{
    this.shadow =  {'box-shadow': `inset 0 0 20px ${color}`};
  }

  toRight(): void {
    if (this.page < 30) this.page++;
  }

  toLeft(): void {
    if (this.page > 1) this.page--;
  }

  ngOnInit(): void {
  }

}
