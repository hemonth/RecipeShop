import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() recipiesClicked = new EventEmitter<boolean>();
  @Output() shoppingListClicked = new EventEmitter<boolean>();

  title = 'Angular';
  username = "";
  password = "";

  onShowRecipes(){
    this.recipiesClicked.emit(true);
  }

  onShowShoppingList(){
    this.shoppingListClicked.emit(true);
  }
}
