import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Turno } from 'src/app/models/turno/turno';
import { map } from 'rxjs/operators';
import { diccionario } from 'src/app/models/diccionario';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-listado-especialista-container',
  templateUrl: './listado-especialista-container.component.html',
  styleUrls: ['./listado-especialista-container.component.css']
})
export class ListadoEspecialistaContainerComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _turnos: Array<Turno>;
  public auxTurnos: Array<any>;
  public mostrarModal = false;
  // tslint:disable-next-line: variable-name
  private _key: string;

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this.obtenerTurnos().subscribe((data) => {
      // console.log(data);
      this._turnos = data;
      this.manageList();
    });
  }

  private obtenerTurnos() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.turnos)
      .pipe(
        map(retorno => {
          const auxLista = retorno.map(a => {
            const data: Turno = a.payload.doc.data() as Turno;
            data.key = a.payload.doc.id;
            return data;
          });

          const auxReturn = new Array<Turno>();

          for (const turno of auxLista) {
            // console.log(turno.fecha);
            const auxDate = new Date(turno.fecha);
            const auxDateA = new Date();
            // console.log(auxDate.toDateString(), auxDateA.toDateString());

            if (auxDate.toDateString() === auxDateA.toDateString()) {
              auxReturn.push(turno);
            }
          }

          return auxReturn;
        })
      );
  }


  public async manageList() {
    // console.log('En manage list', this._turnos);
    const auxTurnosArr = new Array<any>();

    for (const turnoA of this._turnos) {
      // console.log(turnoA);
      const auxCliente = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, turnoA.cliente))
        .data()) as Usuario;
      const auxEspecialista = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, turnoA.especialista))
        .data()) as Usuario;

      const auxTurno: any = {
        key: turnoA.key,
        cliente: auxCliente.nombre + ' - ' + auxCliente.apellido,
        especialista: auxEspecialista.nombre + ' - ' + auxEspecialista.apellido,
        fecha: turnoA.fecha,
        estado: turnoA.estado,
        turnoRealizadoPor: turnoA.turnoRealizadoPor === true ? 'cliente' : 'recepcionista',
        sala: turnoA.sala,
      };
      auxTurnosArr.push(auxTurno);
    }

    this.auxTurnos = auxTurnosArr;
    // console.log('En manage list', this.auxTurnos);
  }

  public manejarEliminar(event: { key: string, accion: string }) {
    if (event.accion === 'cancelar') {
      this.mostrarModal = true;
      this._key = event.key;
      // console.log('Event del manejar eliminar', event);}
    } else if (event.accion === 'atender') {
      this.atenderTurno(event.key);
    } else if (event.accion === 'terminar') {
      this.terminarTurno(event.key);
    }
  }

  public atenderTurno(key: string) {
    // console.log('Se marca como atendido y se cambia el estado', key);
    this.cambiarEstado(key, diccionario.estado_turno.en_proceso);
  }

  public terminarTurno(key: string) {
    // console.log('se termina el turno', key);
    this.cambiarEstado(key, diccionario.estado_turno.terminado);
  }

  public async manejarConfirmacion(event: { respuesta: boolean, key: string }) {
    // console.log('Respuesta del modal', event);

    this.mostrarModal = false;
    if (event.respuesta) {
      this.cambiarEstado(event.key, diccionario.estado_turno.ausente);
      this._key = '';
    } else {
      this._key = '';
    }
  }

  private async cambiarEstado(key: string, estado: string) {
    await this._firebaseServ.actualizarDocumento(diccionario.db.turnos, key, { estado });
  }

  public cerrarModales() {
    this.mostrarModal = false;
  }
}
