import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged = false;
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(){
    this.authService.loggedInSubject.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
    })
  }

  onLogIn() {
    this.authService.login();
  }

  onLogOut() {
    this.authService.logout();
  }

}
