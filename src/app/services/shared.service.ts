import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public chaturl: string = environment.chatLoginURL;

  private newUser = new BehaviorSubject({
    user: {
      name: undefined,
      type: undefined,
      room: undefined,
      country: undefined,
      language: undefined,
    },
  });

  newUserData = this.newUser.asObservable();

  constructor() {}

  submitNewUser(user: any) {
    this.newUser.next(user);
  }
}
