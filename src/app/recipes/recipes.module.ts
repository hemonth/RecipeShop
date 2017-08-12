import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipelistComponent } from '../recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from '../recipes/recipedetail/recipedetail.component';
import { RecipeitemComponent } from '../recipes/recipelist/recipeitem/recipeitem.component';
import { RecipeeditComponent } from '../recipes/recipeedit/recipeedit.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RecipesRoutingModule } from '../recipes/recipes-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    RecipeeditComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    RecipesRoutingModule
  ]
})

export class RecipesModule {

}
