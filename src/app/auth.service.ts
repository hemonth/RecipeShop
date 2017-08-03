import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
export class AuthService {
  loggedInSubject = new Subject<boolean>();
  loggedIn: boolean = false;
  token: string;

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

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
      error => console.log(error)
      )
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( response => {
        firebase.auth().currentUser.getToken()
          .then((token: string) => {
          this.token = token;
          })
        this.loggedIn = true;
        this.loggedInSubject.next(true);
      })
  }

  getToken() {
    firebase.auth().currentUser.getToken()
    .then((token: string) => {
    this.token = token;
    })
    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.loggedIn = false;
    this.loggedInSubject.next(false);
  }
}
