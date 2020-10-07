import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { Event } from '../models/event';
import { User } from '../models/user';
import * as socketIo from 'socket.io-client';
import { environment } from '../../environments/environment';

const CHAT_SERVER_URL = environment.chatServerURL;

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(CHAT_SERVER_URL);
  }

  public send(message: string): void {
    this.socket.emit('message', message);
  }

  public join(user: User): void {
    this.socket.emit('joinRoom', user);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>((observer) => {
      this.socket.on('message', (data: Message) => {
        observer.next(data);
      });
    });
  }

  public onRoomUsers(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      this.socket.on(`roomUsers`, (data: User[]) => {
        observer.next(data['users']);
      });
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>((observer) => {
      this.socket.on(event, () => {
        observer.next();
      });
    });
  }

  public onChatUrl(): void {
    this.socket.on('chatLoginUrl', (data: string) => {
      console.log('chatLoginUrl', data);
    });
  }
}
