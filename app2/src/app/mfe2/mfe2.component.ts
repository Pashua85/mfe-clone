import { Component } from '@angular/core';
import {CommonMfeService} from 'common-mfe'

@Component({
  selector: 'app-mfe2',
  template: `
    Это приложение из mfe2
    <button (click)="sendMsg()">Отправить сообшение в микрофронт</button>

    <button routerLink="test">Перейти на уровень глубже по маршруту</button>
  `
})
export class Mfe2Component {
  constructor(private _commonMfe: CommonMfeService) {}

  sendMsg(){
    this._commonMfe.sendMessage(
      'mfe2',
      {
        detail: 'same text - mfe2'
      },
      'shell'
    )
  }
}
