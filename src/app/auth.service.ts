import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class AuthService {
  loggedInSubject = new Subject<boolean>();
  loggedIn:boolean = false;

  constructor() { }

  isAuthenticated() {
    //asynchronous way
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 1);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    this.loggedInSubject.next(true);
  }

  logout() {
    this.loggedIn = false;
    this.loggedInSubject.next(false);
  }
}
