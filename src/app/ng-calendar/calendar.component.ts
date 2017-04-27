import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'pr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  grid: any;

  constructor(
    private data: EventsService
  ) {
    data.grid$.subscribe(grid => this.grid = grid)
  }

  ngOnInit() {
  }

}
