import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AudioService} from "../../../../services/audio.service";

@Component({
  selector: 'app-audio-game-levels',
  templateUrl: './audio-game-levels.component.html',
  styleUrls: ['./audio-game-levels.component.scss']
})
export class AudioGameLevelsComponent implements OnInit {

  constructor() { }

  public group: number = 2;
  @Output() groupOfWords = new EventEmitter<number>();
  ngOnInit(): void {
  }

  public getGroup(currentGroup:number):void {
    this.groupOfWords.emit(currentGroup);
  }
}
