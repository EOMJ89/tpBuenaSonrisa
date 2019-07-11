import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-estadisticas-especialidad-lazy',
  templateUrl: './estadisticas-especialidad-lazy.component.html',
  styleUrls: ['./estadisticas-especialidad-lazy.component.css']
})
export class EstadisticasEspecialidadLazyComponent implements OnChanges {
  @Input() public lista: Array<{ especialista: string, especialidad: string, turnos: number }>;
  constructor() { }

  ngOnChanges() {
    // console.log(this.lista);
  }
}
