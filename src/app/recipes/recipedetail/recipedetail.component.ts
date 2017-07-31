import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
export class RecipedetailComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  routeSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService, private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params['index']);
    });
  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['recipes', this.activatedRoute.snapshot.params['index'], 'edit']);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
