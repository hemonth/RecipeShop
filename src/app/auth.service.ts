import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
export class AuthService {
  error = new Subject<any>();
  loggedInSubject = new Subject<boolean>();
  personObject: firebase.User;
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
      error => {
        this.error.next(error);
      })
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.personObject = firebase.auth().currentUser;
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          })
        this.loggedIn = true;
        this.loggedInSubject.next(true);
      })
      .catch(
      error => {
        this.error.next(error);
      })
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      })
    console.log(this.token);
    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.loggedIn = false;
    this.loggedInSubject.next(false);
  }
}
