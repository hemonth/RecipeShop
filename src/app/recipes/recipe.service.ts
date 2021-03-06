import {Output, EventEmitter, Injectable} from '@angular/core';
import { Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import { DataStorageService } from '../shared/datastorage.service';

@Injectable()
export class RecipeService {

  constructor(private dataStorageService: DataStorageService){

  }

  recipesEdited = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Bagels', 'Delicious Bagels', 'http://www.goldbergbagel.com/wp-content/uploads/2014/08/bagels.jpg', [new Ingredient("Corn", 2), new Ingredient("Sugar", 3)]),
    new Recipe('Coffee', 'Hot Coffee 2', 'http://dining.ucr.edu/images/foodshot-coffeebean.jpg', [new Ingredient("Coffee Beans", 2), new Ingredient("Sugar", 3), new Ingredient("Cream", 1)]),
    new Recipe('Checkers Loaded Fries', 'Yummy potato fries with tomato sauce', 'http://garciastudio.com/koken/storage/cache/images/000/318/Checkers-Loaded-Fries,large.jpg', [new Ingredient('Potatoes', 5), new Ingredient('Tomatoes', 4)])
  ];

  getReipes() {
    this.dataStorageService.getRecipes().subscribe((response: Response) => {
      this.recipes = <Recipe[]>response.json();
      console.log("recipes: ");
      console.log(this.recipes);
          this.recipesEdited.next(this.recipes);
        });
        return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.dataStorageService.storeRecipe(recipe).subscribe((response: Response) => {
      console.log(response);
    });
    this.getReipes();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesEdited.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.dataStorageService.deleteRecipe(index);
    this.getReipes();
  }

}
