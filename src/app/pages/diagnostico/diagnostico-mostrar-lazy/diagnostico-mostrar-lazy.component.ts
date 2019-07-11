import { Component, Input, OnChanges } from '@angular/core';
import { Diagnostico } from 'src/app/models/diagnostico/diagnostico';

@Component({
  selector: 'app-diagnostico-mostrar-lazy',
  templateUrl: './diagnostico-mostrar-lazy.component.html',
  styleUrls: ['./diagnostico-mostrar-lazy.component.css']
})
export class DiagnosticoMostrarLazyComponent implements OnChanges {
  @Input() public diagnostico: Diagnostico;

  ngOnChanges() {
    // console.log('Diagnostico en Change', this.diagnostico);
  }
}
