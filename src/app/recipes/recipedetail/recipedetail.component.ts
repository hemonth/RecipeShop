import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '.././recipe.model';
import {ShoppingListService} from '../../shoppinglist/shoppinglist.service';
import { RecipeService } from '../recipe.service';
import { CanComponentDeactivate } from '../../canDeactivateGuard.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit, CanComponentDeactivate, OnDestroy {

  recipe: Recipe;
  toShoppingListFlag = false;
  firstTimeFlag = true;
  routeSubscription : Subscription;
  constructor(private shoppingListService: ShoppingListService, private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  this.routeSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['index']);
    });
  }

  onAddToShoppingList() {
    this.toShoppingListFlag = true;
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['recipes/edit',this.activatedRoute.snapshot.params['index']]);
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

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }
}
