import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipedetailComponent } from '../recipes/recipedetail/recipedetail.component';
import { RecipeeditComponent } from '../recipes/recipeedit/recipeedit.component';
import { Authguard } from '../authguard.service';
import { CanDeactivateGuard } from '../canDeactivateGuard.service';


const recipeRoutes: Routes = [
  { path: '', component: RecipesComponent, canActivate: [Authguard], canActivateChild: [Authguard], children: [
      { path: 'create', component: RecipeeditComponent, canDeactivate: [CanDeactivateGuard] },
      { path: ':index', component: RecipedetailComponent },
      { path: ':index/edit', component: RecipeeditComponent, canDeactivate: [CanDeactivateGuard] },
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
