import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'pr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  grid: any;
  title: String;
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor(
    private data: EventsService
  ) {
    data.grid$.subscribe(grid => this.grid = grid);
    data.title$.subscribe(title => this.title = title);
  }

  ngOnInit() {
  }

}
