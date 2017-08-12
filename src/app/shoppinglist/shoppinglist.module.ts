import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppinglistComponent } from '../shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from '../shoppinglist/shoppingedit/shoppingedit.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations:[
    ShoppinglistComponent,
    ShoppingeditComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports:[
    AppRoutingModule
  ]
})
export class ShoppingListModule{

}
