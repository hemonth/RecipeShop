import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {ShoppingListService} from '././shoppinglist/shoppinglist.service';
import { RecipeService } from './recipes/recipe.service';
import {AuthService} from './auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService, RecipeService]
})
export class AppComponent implements OnInit {
  title = 'app';
  subscription: Subscription;
  public notificationOptions = {
    position: ['bottom','right'],
    animate: 'scale',
    timeOut: 5000,
    clickToClose: true,
    showProgressBar: true,
    preventDuplicates: true
  }

  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCwhkIOOScd2h96oICHF9w1XU_f6Cn-4zU",
      authDomain: "recipeshop-631ad.firebaseapp.com",
      databaseURL: "https://recipeshop-631ad.firebaseio.com",
      projectId: "recipeshop-631ad",
      storageBucket: "recipeshop-631ad.appspot.com",
      messagingSenderId: "638133277331"
    });
    this.subscription = this.authService.loggedInSubject.subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['home']);
      }
      else {
        this.router.navigate(['home'])
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
