import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { CanDeactivateGuard } from './canDeactivateGuard.service';
import { AngularMaterialComponent } from './angular-material/angular-material.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'material-cards', component: AngularMaterialComponent },
  // { path: '**', redirectTo: 'home' }
]

//routerModule
//"enableTracing" property only for development purpose, watch console;
//useHash property for enable hashing
//preloadingStrategy: PreloadAllModules to preload all lazyloaded modules
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
