import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { RecipeitemComponent } from '../recipeitem/recipeitem.component';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Bagels','Delicious Bagels','http://www.goldbergbagel.com/wp-content/uploads/2014/08/bagels.jpg'),
    new Recipe('Coffee','Hot Coffee','http://dining.ucr.edu/images/foodshot-coffeebean.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
