import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { HomeComponent } from './home/home.component';
import { Authguard } from './authguard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CanDeactivateGuard } from './canDeactivateGuard.service';
import { AngularMaterialComponent } from './angular-material/angular-material.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'home', component: HomeComponent },
  { path: 'shopping-list', canActivate: [Authguard], component: ShoppinglistComponent }, //canActivate property can take array of guards where all the guards defined in the array are also applied to child routes.
  { path: 'material-cards', component: AngularMaterialComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  // { path: '**', redirectTo: 'home' }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })], //routerModule "enableTracing" property only for development purpose, watch console; useHash for enable hashing
  exports: [RouterModule]
})
export class AppRoutingModule {

}
