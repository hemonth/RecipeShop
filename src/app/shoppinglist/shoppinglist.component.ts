import { Component, OnInit } from '@angular/core';
import { Ingredient }from '../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
  }

  addIngredient(ingredient: Ingredient){
    this.slService.addIngredient(ingredient);
  }
}
