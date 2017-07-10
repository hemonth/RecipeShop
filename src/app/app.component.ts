import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showRecipes = false;
  showShoppingList = true;

  onShowRecipes(){
    this.showRecipes = true;
    this.showShoppingList = false;
  }

  onShowShoppingList(){
    this.showShoppingList = true;
     this.showRecipes= false;
  }
}
