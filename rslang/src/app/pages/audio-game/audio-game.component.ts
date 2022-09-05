import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-audio-game',
  templateUrl: './audio-game.component.html',
  styleUrls: ['./audio-game.component.scss']
})
export class AudioGameComponent implements OnInit {
  public display: number;

  constructor() {
    this.display = 1;
  }

  ngOnInit(): void {
  }

  public getDisplay(display: number): void {
    this.display = display;
  }
}
