import { Injectable } from '@angular/core';
import {filter, Observable, Subject} from "rxjs";

export interface Message {
  sender: string;   // Кто отправил сообщение
  content: any;     // Содержимое сообщения
  type: string;     // Тип или ключ сообщения
}

@Injectable({
  providedIn: 'root'
})
export class CommonMfeService {
  private _messageSubject = new Subject<Message>();

  // Метод для отправки сообщения
  sendMessage(sender: string, content: any, type: string) {
    const message: Message = { sender, content, type };
    this._messageSubject.next(message);
  }

  // Слушаем все сообщения
  onMessage(): Observable<Message>;

  // Слушаем конкретные сообщения по массиву ключей
  onMessage(keys: string[]): Observable<Message>;

  // Слушаем все кроме конкретных сообщений
  onMessage(keys: string[], exclude: boolean): Observable<Message>;

  // Реализация метода с фильтрацией
  onMessage(keys?: string[], exclude: boolean = false): Observable<Message> {
    if (!keys) {
      // Если ключи не переданы, возвращаем все сообщения
      return this._messageSubject.asObservable();
    }

    return this._messageSubject.asObservable().pipe(
      filter(message => {
        if (exclude) {
          // Если exclude = true, исключаем сообщения с данными ключами
          return !keys.includes(message.type);
        } else {
          // Если exclude = false, фильтруем по массиву ключей
          return keys.includes(message.type);
        }
      })
    );
  }
}
