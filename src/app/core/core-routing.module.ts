import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignupComponent } from '../core/signup/signup.component';
import { SigninComponent } from '../core/signin/signin.component';
import { HomeComponent } from '../core/home/home.component';

const coreRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {

}
