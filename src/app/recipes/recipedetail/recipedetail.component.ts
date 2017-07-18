import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '.././recipe.model';
import {ShoppingListService} from '../../shoppinglist/shoppinglist.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService, private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['index']);
    });
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
