import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnostico-lazy',
  templateUrl: './diagnostico-lazy.component.html',
  styleUrls: ['./diagnostico-lazy.component.css']
})
export class DiagnosticoLazyComponent implements OnInit {
  @Output() public aceptarFormulario = new EventEmitter<{ diagnostico: string }>();

  public form: FormGroup;


  ngOnInit() {
    this.form = new FormGroup({
      diagnostico: new FormControl('', Validators.required),
    });
    // console.log(this.form.value);
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }
}
