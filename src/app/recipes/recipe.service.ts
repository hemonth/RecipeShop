import {Recipe} from './recipe.model';

export class RecipeService {
private   recipes: Recipe[] = [
    new Recipe('Bagels','Delicious Bagels','http://www.goldbergbagel.com/wp-content/uploads/2014/08/bagels.jpg'),
    new Recipe('Coffee','Hot Coffee 2','http://dining.ucr.edu/images/foodshot-coffeebean.jpg')
  ];

  getReipes(){
    return this.recipes.slice();
  }

}
