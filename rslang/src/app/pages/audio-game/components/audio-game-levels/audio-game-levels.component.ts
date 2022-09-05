import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AudioService } from 'src/app/services/audio.service';
import { IWord } from 'src/types';

@Component({
  selector: 'app-audio-game-levels',
  templateUrl: './audio-game-levels.component.html',
  styleUrls: ['./audio-game-levels.component.scss']
})
export class AudioGameLevelsComponent implements OnInit {
  @Output()
  display: EventEmitter<number>;

  constructor(private api: ApiService, private audioService: AudioService) {
    this.display = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.api.getUserWords(localStorage.getItem('userId')!).subscribe(words => this.audioService.userWords = words);
  }

  public startGame(group: number): void {
    for (let i = 0; i < 3; i++) {
      const page: number = Math.floor(Math.random() * 30);
      this.api.getWords(group, page).subscribe((words: IWord[]) => {
        this.audioService.words.push(...words);
      });
    }
    setTimeout(() => this.display.emit(2), 1000);
  }
}
