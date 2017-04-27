import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  grid$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(
    private http: Http
  ) {
    http.get('https://raw.githubusercontent.com/opendatajson/football.json/master/2015-16/en.1.json')
      .map(res => res.json())
      .subscribe(data => this.format(data));
  }

  format(data) {
    let matches = [];
    for (let round of data['rounds']) {
      for (let match of round['matches']) {
        matches.push({
          date: match['date'],
          title: `${match['team1']['code']} x ${match['team2']['code']}`
        });
      }
    }

    // build the grid
    let base = moment.utc(matches[0]['date']);
    let first = base.date(1).toString().substr(0, 3);
    let last = base.endOf('month').toString().substr(8, 2);

    let grid = [],
      flag = true,
      days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    let i = 0, d = 0;
    while (flag) {
      // initialize the week
      grid[i] = [];
      for (const day of days) {
        // initialize the day
        grid[i][days.indexOf(day)] = {};
        // assign the day number
        if (!flag) {
          // already finished the month
        } else if (d > 0) {
          // end of the month check
          if (d === Number(last)) {
            flag = false;
          } else {
            d++;
            grid[i][days.indexOf(day)]['num'] = d;
          }
        } else if (i === 0 && first === day) {
          d++;
          grid[i][days.indexOf(day)]['num'] = d;
        }
      }
      i++;  // pass to the next week
    }

    this.grid$.next(grid);
  }
}
