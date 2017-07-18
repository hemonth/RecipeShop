import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: ':index', component: RecipedetailComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppinglistComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
