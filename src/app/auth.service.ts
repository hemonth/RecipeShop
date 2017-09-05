import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

export class AuthService {
  alert = new Subject<any>();
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
      .then(response => {
        this.personObject = response;
        response.sendEmailVerification();
        this.alert.next("Sign Up Successful! Sent a verification email please verify.");
      })
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        this.personObject = firebase.auth().currentUser;
        if (this.personObject.emailVerified) {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
            })
          this.loggedIn = true;
          this.loggedInSubject.next(true);
        }
        else {
          this.personObject.sendEmailVerification();
          this.alert.next("Sent a verification email, please verify your email before Login.");
        }
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

  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      // Email sent.
    }).catch(function(error) {
      this.error.next(error);
    });
  }
}
