import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '.././recipe.model';
import {ShoppingListService} from '../../shoppinglist/shoppinglist.service';
import { RecipeService } from '../recipe.service';
import { CanComponentDeactivate } from '../../canDeactivateGuard.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit, CanComponentDeactivate {

  recipe: Recipe;
  toShoppingListFlag = false;
  firstTimeFlag = true;
  constructor(private shoppingListService: ShoppingListService, private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['index']);
    });
  }

  onAddToShoppingList() {
    this.toShoppingListFlag = true;
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  //this is not the perfect use case.
  canDeactivate():  Observable<boolean> | Promise<boolean> | boolean{
    if(!this.toShoppingListFlag && this.firstTimeFlag){
      this.firstTimeFlag = false;
      return confirm("You can add recipe ingredients to the shopping list using manage recipe dropdown");
    }
    else{
      return true;
    }
  }
}
