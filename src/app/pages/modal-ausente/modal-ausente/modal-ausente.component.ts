import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-ausente',
  templateUrl: './modal-ausente.component.html',
  styleUrls: ['./modal-ausente.component.css']
})
export class ModalAusenteComponent {
  @Output() public recibirRespuesta = new EventEmitter<{ respuesta: boolean, key: string }>();
  @Input() public key: string;

  public manejarConfirmacion(respuesta: boolean) {
    this.recibirRespuesta.emit({ respuesta, key: this.key });
  }
}
