import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import {AuthService} from '../auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isLogged = false;
  loginSubscription : Subscription;
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(){
    this.loginSubscription = this.authService.loggedInSubject.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    })
  }

  onLogOut(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.loginSubscription.unsubscribe();
  }

}
