import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '.././recipe.service';
// import { RecipeitemComponent } from '../recipeitem/recipeitem.component';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getReipes();
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
