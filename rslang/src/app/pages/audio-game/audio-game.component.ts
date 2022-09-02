import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-audio-game',
  templateUrl: './audio-game.component.html',
  styleUrls: ['./audio-game.component.scss']
})
export class AudioGameComponent implements OnInit {

  @Input() dis:number = 2;

  display:number = 1;
  levelWords: number;

  constructor() { }

  ngOnInit(): void {
  }


  changeGroup([number]:[number]) {

    this.levelWords = number;
    console.log(this.levelWords)
  }
}
