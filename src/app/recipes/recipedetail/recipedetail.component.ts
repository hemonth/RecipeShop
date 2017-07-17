import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '.././recipe.model';
import {ShoppingListService} from '../../shoppinglist/shoppinglist.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    alert(this.recipe.ingredients);
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
