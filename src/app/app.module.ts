import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule} from '@angular/material';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shoppinglist/shoppinglist.module';


@NgModule({
  declarations: [
    AppComponent,
    //CustomIfDirective,
    AngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // below 4 are feature modules. there is also a recipes module which we are doing lazy loading. lazy loading modules will not be loaded into app module.
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ShoppingListModule,

    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
