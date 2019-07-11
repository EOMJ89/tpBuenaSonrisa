import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { diccionario } from 'src/app/models/diccionario';

@Component({
  selector: 'app-sala-esperas-lazy',
  templateUrl: './sala-esperas-lazy.component.html',
  styleUrls: ['./sala-esperas-lazy.component.css']
})
export class SalaEsperasLazyComponent implements OnInit, OnChanges {
  @Input() public listado: Array<any>;
  @Output() public enviarKeyHabilitación = new EventEmitter<{ key: string, estado: string }>();

  public diccionario;

  constructor() { }

  ngOnInit() {
    this.diccionario = diccionario;
  }

  ngOnChanges() {
    // console.log(this.listado);
  }

  public habilitarConsultorio(key: string, estado: string) {
    // console.log('Envio un output para habilitar el consultorio', key);>
    this.enviarKeyHabilitación.emit({ key, estado });
  }
}
