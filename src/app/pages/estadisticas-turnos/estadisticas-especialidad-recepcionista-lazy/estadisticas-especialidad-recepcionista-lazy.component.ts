import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-estadisticas-especialidad-recepcionista-lazy',
  templateUrl: './estadisticas-especialidad-recepcionista-lazy.component.html',
  styleUrls: ['./estadisticas-especialidad-recepcionista-lazy.component.css']
})
export class EstadisticasEspecialidadRecepcionistaLazyComponent implements OnChanges {
  @Input() public lista: Array<{ tipo: string, turnos: number }>;
  constructor() { }

  ngOnChanges() {
    // console.log(this.lista);
  }
}
