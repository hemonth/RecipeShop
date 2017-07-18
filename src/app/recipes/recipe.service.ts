import {Output, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Bagels', 'Delicious Bagels', 'http://www.goldbergbagel.com/wp-content/uploads/2014/08/bagels.jpg', [new Ingredient("Corn", 2), new Ingredient("Sugar", 3)]),
    new Recipe('Coffee', 'Hot Coffee 2', 'http://dining.ucr.edu/images/foodshot-coffeebean.jpg', [new Ingredient("Coffee Beans", 2), new Ingredient("Sugar", 3), new Ingredient("Cream", 1)])
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  getReipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
