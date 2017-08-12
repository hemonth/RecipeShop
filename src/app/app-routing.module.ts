import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CanDeactivateGuard } from './canDeactivateGuard.service';
import { AngularMaterialComponent } from './angular-material/angular-material.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'material-cards', component: AngularMaterialComponent },
  // { path: '**', redirectTo: 'home' }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })], //routerModule "enableTracing" property only for development purpose, watch console; useHash for enable hashing
  exports: [RouterModule]
})
export class AppRoutingModule {

}
