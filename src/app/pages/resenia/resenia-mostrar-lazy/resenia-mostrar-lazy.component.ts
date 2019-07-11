import { Component, OnChanges, Input } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta/encuesta';

@Component({
  selector: 'app-resenia-mostrar-lazy',
  templateUrl: './resenia-mostrar-lazy.component.html',
  styleUrls: ['./resenia-mostrar-lazy.component.css']
})
export class ReseniaMostrarLazyComponent implements OnChanges {
  @Input() public encuesta: Encuesta;

  ngOnChanges() {
    // console.log('Diagnostico en Change', this.encuesta);
  }
}
