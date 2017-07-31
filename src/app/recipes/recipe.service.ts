import {Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs/subject';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipesEdited = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Bagels', 'Delicious Bagels', 'http://www.goldbergbagel.com/wp-content/uploads/2014/08/bagels.jpg', [new Ingredient("Corn", 2), new Ingredient("Sugar", 3)]),
    new Recipe('Coffee', 'Hot Coffee 2', 'http://dining.ucr.edu/images/foodshot-coffeebean.jpg', [new Ingredient("Coffee Beans", 2), new Ingredient("Sugar", 3), new Ingredient("Cream", 1)]),
    new Recipe('Checkers Loaded Fries', 'Yummy potato fries with tomato sauce', 'http://garciastudio.com/koken/storage/cache/images/000/318/Checkers-Loaded-Fries,large.jpg', [new Ingredient('Potatoes', 5), new Ingredient('Tomatoes', 4)])
  ];

  getReipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesEdited.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesEdited.next(this.recipes.slice());
  }

}
