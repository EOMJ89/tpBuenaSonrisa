import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-estadistica-fechas-turnos-lazy',
  templateUrl: './estadistica-fechas-turnos-lazy.component.html',
  styleUrls: ['./estadistica-fechas-turnos-lazy.component.css']
})
export class EstadisticaFechasTurnosLazyComponent implements OnChanges {
  @Input() public lista: Array<{ especialista: string, dias: number }>;
  constructor() { }

  ngOnChanges() {
    // console.log(this.lista);
  }
}
