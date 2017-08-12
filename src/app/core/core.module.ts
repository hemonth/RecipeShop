import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
//services below
import { CanDeactivateGuard } from '../canDeactivateGuard.service';
import { DataStorageService } from '../shared/datastorage.service';
import { Authguard } from '../authguard.service';
import { AuthService } from '../auth.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [Authguard, AuthService, CanDeactivateGuard, DataStorageService]
})
export class CoreModule {

}
