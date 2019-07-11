import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { diccionario } from 'src/app/models/diccionario';

@Component({
  selector: 'app-modal-consultorio',
  templateUrl: './modal-consultorio.component.html',
  styleUrls: ['./modal-consultorio.component.css']
})
export class ModalConsultorioComponent implements OnInit {
  @Output() public recibirRespuesta = new EventEmitter<{ key: string, estado: string, respuesta: boolean, }>();
  @Input() public key: string;
  @Input() public estado: string;
  public diccionario;

  ngOnInit() {
    this.diccionario = diccionario;
    // console.log(this.estado);
  }

  public manejarConfirmacion(respuesta: boolean) {
    this.recibirRespuesta.emit({ key: this.key, estado: this.estado, respuesta });
  }
}
