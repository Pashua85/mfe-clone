import { Component } from '@angular/core';
import {CommonMfeService} from 'common-mfe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _commonMfe: CommonMfeService) {
    this._commonMfe.onMessage().subscribe((message) => {
      console.log('shell', message)
      debugger
    })
  }

  sendMsg() {
    const event = new CustomEvent('app1-event', {
      detail: { message: 'Hello from Microfrontend 1' },
    });

    dispatchEvent(event);
  }
}
