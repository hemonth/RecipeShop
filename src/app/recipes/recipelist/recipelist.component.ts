import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '.././recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getReipes();
    this.recipeService.recipesEdited.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }

}
