import { Component } from '@angular/core';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

/*
An app with a calendar component:
- Displays a single month at a time
- Receives a list of events
- Any day could contain zero or more events
- No event spans more than a single day

Event structure:
- Date
- Title (code field, format COD1 x COD2)
*/
