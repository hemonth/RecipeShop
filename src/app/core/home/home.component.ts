import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  personObject: firebase.User;
  isLogged: boolean = false;
  userName: string = "";
  loginSubscription : Subscription;
  constructor(private authService: AuthService) {
    this.isLogged = authService.loggedIn;
    this.personObject = authService.personObject;
    if (this.isLogged) {
      this.userName = this.personObject.email.slice(0, this.personObject.email.indexOf("@"));
    }
  }

  ngOnInit(){
    this.loginSubscription = this.authService.loggedInSubject.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    })
  }

  ngOnDestroy(){
    this.loginSubscription.unsubscribe();
  }


}
