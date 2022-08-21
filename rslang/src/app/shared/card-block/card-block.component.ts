import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {

  @Input()  public buttonTitle = 'XXXXXXXXX';
  @Input() public titleCard = 'XXXXXXXX'
  @Input() public currentImage =  "./assets/learning-english-concept.webp"
  @Input() public logoBook =  "./assets/book-elec.svg"


  constructor() { }

  ngOnInit(): void {
  }

}
