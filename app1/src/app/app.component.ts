import { Component } from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-root',
  template: `Это app1 - независимое приложение`
})
export class AppComponent {
  constructor() {
    fromEvent(window, 'app1-event').subscribe((event: any) => {
      console.log(event)
    });
  }
}

