import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-lazy',
  templateUrl: './login-lazy.component.html',
  styleUrls: ['./login-lazy.component.css']
})
export class LoginLazyComponent implements OnInit {
  @Output() public aceptarFormulario = new EventEmitter<{ correo: string, clave: string }>();

  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.form.valueChanges.subscribe(() => {
      console.log(this.form.controls.clave);
    });
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }
}
