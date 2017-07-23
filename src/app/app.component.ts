import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {ShoppingListService} from '././shoppinglist/shoppinglist.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent implements OnInit{
  title = 'app';
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router){

  }
  ngOnInit(){
    this.subscription = this.authService.loggedInSubject.subscribe((loggedIn:boolean) =>{
      if(!loggedIn){
        this.router.navigate(['home']);
      }
      else{
        this.router.navigate(['recipes'])
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
