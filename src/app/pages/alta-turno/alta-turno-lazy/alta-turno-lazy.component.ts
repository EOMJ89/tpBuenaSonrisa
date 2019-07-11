import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-alta-turno-lazy',
  templateUrl: './alta-turno-lazy.component.html',
  styleUrls: ['./alta-turno-lazy.component.css']
})
export class AltaTurnoLazyComponent implements OnInit {
  @Output() public aceptarFormulario = new EventEmitter<{ especialista: string, fecha: number, cliente: string }>();
  @Input() public especialistas: Array<Usuario>;
  @Input() public clientes: Array<Usuario> | null;

  public form: FormGroup;

  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService) { }

  ngOnInit() {
    const date = new Date();

    this.form = new FormGroup({
      especialista: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
    });

    if (this._authServ.user.tipo === 'cliente') {
      this.form.patchValue({ cliente: this._authServ.user.key });
    }

    // console.log(this.form.value);
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }
}
