import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _router: Router) { }

  public cerrarSesion() {
    this._authServ.logOff().then(() => {
      this._router.navigate(['login']);
    });
  }
}
