import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() public recibirRespuesta = new EventEmitter<{ respuesta: boolean, key: string }>();
  @Input() public key: string;

  public manejarConfirmacion(respuesta: boolean) {
    this.recibirRespuesta.emit({ respuesta, key: this.key });
  }
}
