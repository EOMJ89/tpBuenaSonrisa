import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Encuesta } from 'src/app/models/encuesta/encuesta';

@Component({
  selector: 'app-resenia-lazy',
  templateUrl: './resenia-lazy.component.html',
  styleUrls: ['./resenia-lazy.component.css']
})
export class ReseniaLazyComponent implements OnInit {
  @Output() public aceptarFormulario = new EventEmitter<Encuesta>();
  public form: FormGroup;


  ngOnInit() {
    this.form = new FormGroup({
      resenia: new FormControl('', [Validators.required, Validators.maxLength(66)]),
      clinica: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)]),
      especialista: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10)]),
    });

    // this.form.valueChanges.subscribe(() => { console.log(this.form.value); });
    // console.log(this.form.value);
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value as Encuesta);
    this.aceptarFormulario.emit(this.form.value as Encuesta);
  }
}
