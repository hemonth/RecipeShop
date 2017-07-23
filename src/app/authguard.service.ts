import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class Authguard implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router) {

   }

// canActivate can run both asynchronously returning observable or promise or synchronously.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{
    return this.authService.isAuthenticated().
    then(
      (authenticated : boolean) => {
        if(authenticated){
          return true;
        } else {
          return this.router.navigate(['/home']);
        }
      }
    );
  }
  //applying same logic inside both canActiave and canActiaveChild, basically we can also create seperate component which extends CanActivateChild interface and can split the functionality.
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{
    return this.canActivate(route,state);
  }
}
