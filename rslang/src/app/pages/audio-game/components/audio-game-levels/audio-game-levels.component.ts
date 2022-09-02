import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-audio-game-levels',
  templateUrl: './audio-game-levels.component.html',
  styleUrls: ['./audio-game-levels.component.scss']
})
export class AudioGameLevelsComponent implements OnInit {

  constructor() { }


  isActiveGroup: boolean[] = [true, false, false, false, false]
  group: number = 2;


  @Output() groupOfWords = new EventEmitter<[number]>()


  ngOnInit(): void {
  }

  getGroup(currentGroup:number):void {
    this.groupOfWords.emit([currentGroup])
  }

}
