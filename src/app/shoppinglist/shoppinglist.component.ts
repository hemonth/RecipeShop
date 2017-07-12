import { Component, OnInit } from '@angular/core';
import { Ingredient }from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Cocoa Beans", 5),
    new Ingredient("Sugar Cubes", 3)
  ];
  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
