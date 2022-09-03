import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-results',
  templateUrl: './sprint-results.component.html',
  styleUrls: ['./sprint-results.component.scss']
})
export class SprintResultsComponent implements OnInit {
  @Output()
  gameStatus: EventEmitter<number>;

  constructor(private router: Router) {
    this.gameStatus = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public newGame(): void {
    this.gameStatus.emit(1);
  }

  public toHomePage(): void {
    this.router.navigate(['/home']);
  }
}
