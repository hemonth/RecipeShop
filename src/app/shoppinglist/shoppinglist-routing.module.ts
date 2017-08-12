import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authguard } from '../authguard.service';
import { ShoppinglistComponent } from '../shoppinglist/shoppinglist.component';

const shoppinglistRoutes = [
  { path: 'shopping-list', canActivate: [Authguard], component: ShoppinglistComponent }, //canActivate property can take array of guards where all the guards defined in the array are also applied to child routes.
]
@NgModule({
  imports:[
    RouterModule.forChild(shoppinglistRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ShoppingListRoutingModule{

}
