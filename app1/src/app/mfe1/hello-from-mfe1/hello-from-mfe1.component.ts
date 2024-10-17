import {Component, OnDestroy} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {CommonMfeService} from 'common-mfe'

@Component({
  selector: 'app-hello-from-mfe1',
  template: `
    Это приложение из mfe1
    <button (click)="sendMsg()">Отправить сообшение в микрофронт</button>
  `
})
export class HelloFromMfe1Component implements OnDestroy {
  private _unsubscribe: Subscription[] = [];

  constructor(private _commonMfe: CommonMfeService) {
    this._unsubscribe.push(
      fromEvent(window, 'app1-event').subscribe((event: any) => {
        console.log('mfe1', event)
        debugger
      })
    )
  }

  sendMsg(){
    this._commonMfe.sendMessage(
      'mfe1',
      {
        detail: 'same text'
      },
      'shell'
    )
  }

  ngOnDestroy() {
    this._unsubscribe.forEach((subscription) => subscription.unsubscribe());
  }
}
