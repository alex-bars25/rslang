import { Injectable } from '@angular/core';
import {IWord, userWord} from "../../types";


@Injectable({
  providedIn: 'root'
})


export class AudioService {

  public wordForAudio: IWord[] = [];
  public level: number;
  public userWords: userWord[];

}
