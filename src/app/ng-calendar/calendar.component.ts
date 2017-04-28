import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'pr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  json: String = 'https://raw.githubusercontent.com/opendatajson/football.json/master/2015-16/en.1.json';

  grid: any;
  title: String;
  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor(
    private service: EventsService
  ) {
    service.grid$.subscribe(grid => this.grid = grid);
    service.title$.subscribe(title => this.title = title);

    if (this.json) {
      service.fetch(this.json);
    }
  }

  loadIt() {
    console.log('Load It:', this.json)
    this.service.fetch(this.json);
  }

}
