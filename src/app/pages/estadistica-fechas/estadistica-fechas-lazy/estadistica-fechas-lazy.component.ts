import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-estadistica-fechas-lazy',
  templateUrl: './estadistica-fechas-lazy.component.html',
  styleUrls: ['./estadistica-fechas-lazy.component.css']
})
export class EstadisticaFechasLazyComponent implements OnInit {
  @Output() public aceptarFormulario = new EventEmitter<{ fechaInicio: number, fechaFinal: number }>();
  @Input() public entreFechas: number;
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
    const date = new Date();

    this.form = new FormGroup({
      fechaInicio: new FormControl(date, Validators.required),
      fechaFinal: new FormControl(date, Validators.required),
    });
  }

  public registrar() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }
}

