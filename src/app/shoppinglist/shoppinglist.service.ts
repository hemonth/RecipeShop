import {Subject} from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient("Cocoa Beans", 5),
    new Ingredient("Sugar Cubes", 3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    console.log("ingredients changed" + this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);  //ES6 SPREAD OPERATOR ...
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
