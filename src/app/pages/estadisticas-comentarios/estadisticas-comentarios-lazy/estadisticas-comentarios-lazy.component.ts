import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta/encuesta';

@Component({
  selector: 'app-estadisticas-comentarios-lazy',
  templateUrl: './estadisticas-comentarios-lazy.component.html',
  styleUrls: ['./estadisticas-comentarios-lazy.component.css']
})
export class EstadisticasComentariosLazyComponent implements OnChanges {
  @Input() public lista: Array<{ especialista: string, comentarios: Array<Encuesta> }>;
  constructor() { }

  ngOnChanges() {
   // console.log('On Change', this.lista);
  }

}
