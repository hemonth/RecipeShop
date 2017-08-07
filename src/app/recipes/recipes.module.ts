import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipelistComponent } from '../recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from '../recipes/recipedetail/recipedetail.component';
import { RecipeitemComponent } from '../recipes/recipelist/recipeitem/recipeitem.component';
import { RecipeeditComponent } from '../recipes/recipeedit/recipeedit.component';
import { HomeComponent } from '../home/home.component';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    RecipeeditComponent,
    HomeComponent,
    DropdownDirective
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})

export class RecipesModule {

}
