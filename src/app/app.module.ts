import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule} from '@angular/material';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { HeaderStylesDirective } from './directives/header-styles.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { Authguard } from './authguard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './canDeactivateGuard.service';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DataStorageService } from './shared/datastorage.service';
import { RecipesModule } from './recipes/recipes.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    HeaderStylesDirective,
    CustomIfDirective,
    AngularMaterialComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    RecipesModule
  ],
  providers: [Authguard, AuthService, CanDeactivateGuard, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
