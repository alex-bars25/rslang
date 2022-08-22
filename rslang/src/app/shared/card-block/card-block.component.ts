import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {

  @Input() public titleCard: string;
  @Input() public currentImage: string;

  logoImageBtn: string;


  constructor() { }

  ngOnInit(): void {
  }

}
