import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecepcionistaGuard implements CanActivate {
  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authServ.user.tipo === 'recepcionista') {
      return true;
    } else {
      switch (this._authServ.user.tipo) {
        case 'especialista': {
          this._router.navigate(['home-especialista']);
          break;
        }
        case 'cliente': {
          this._router.navigate(['home-cliente']);
          break;
        }
        default: {
          this._router.navigate(['home-admin']);
          break;
        }
      }

      return false;
    }
  }
}
