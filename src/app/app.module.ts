import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule} from '@angular/material';
// import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { HeaderStylesDirective } from './directives/header-styles.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { Authguard } from './authguard.service';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CanDeactivateGuard } from './canDeactivateGuard.service';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { RecipeeditComponent } from './recipes/recipeedit/recipeedit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    HeaderStylesDirective,
    DropdownDirective,
    CustomIfDirective,
    HomeComponent,
    AngularMaterialComponent,
    RecipeeditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [Authguard, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
