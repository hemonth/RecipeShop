import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { AuthService } from '../auth.service';

@Injectable()
export class DataStorageService{
  private recipes: Recipe[] = [];
  constructor(private http: Http, private authService: AuthService){

  }

  storeRecipe(recipe: Recipe){
    const token = this.authService.getToken();
    this.recipes.push(recipe);
    return this.http.put('https://recipeshop-631ad.firebaseio.com/recipes.json?auth=' + token, this.recipes);
  }

  getRecipes(){
    const token = this.authService.getToken();
    return this.http.get("https://recipeshop-631ad.firebaseio.com/recipes.json?auth=" + token);
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    const token = this.authService.getToken();
    return this.http.put('https://recipeshop-631ad.firebaseio.com/recipes.json?auth=' + token, this.recipes);
  }
}
