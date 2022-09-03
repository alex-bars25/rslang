import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-sprint-intro',
  templateUrl: './sprint-intro.component.html',
  styleUrls: ['./sprint-intro.component.scss']
})
export class SprintIntroComponent implements OnInit {
  @Output()
  isStarted: EventEmitter<boolean>;
  
  public level: number;
  public startClicked: boolean;
  public getReady: string[];
  public phrase: string;
  public bip: HTMLAudioElement;
  public whistle: HTMLAudioElement;

  constructor() {
    this.isStarted = new EventEmitter<boolean>();
    this.level = 1;
    this.startClicked = false;
    this.getReady = ['На старт!', 'Внимание!', 'Марш!'];
    this.phrase = 'Приготовтесь!';
    this.bip = new Audio('assets/voices/bip.mp3');
    this.whistle = new Audio('assets/voices/whistle.mp3');
  }

  ngOnInit(): void {
  }

  public increaseLevel(): void {
    this.level < 6 ? this.level++ : this.level;
  }

  public decreaseLevel(): void {
    this.level > 1 ? this.level-- : this.level;
  }

  public startGame(): void {
    this.startClicked = true;
    interval(1000)
      .pipe(take(this.getReady.length))
      .subscribe((i) => {
        this.phrase = this.getReady[i];
        this.bip.play();
      });
    setTimeout(() => {
      this.isStarted.emit(true);
      this.whistle.play();
    }, 4000);
  }

}
