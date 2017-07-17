import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{
  ingredients: Ingredient[] = [
    new Ingredient("Cocoa Beans", 5),
    new Ingredient("Sugar Cubes", 3)
  ];

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
