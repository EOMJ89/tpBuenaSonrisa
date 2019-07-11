import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { Turno } from 'src/app/models/turno/turno';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-listado-turnos-container',
  templateUrl: './listado-turnos-container.component.html',
  styleUrls: ['./listado-turnos-container.component.css']
})
export class ListadoTurnosContainerComponent implements OnInit {
  public turnos: Array<any>;
  public esRecepcionista: boolean;
  public auxTurnos: Array<any>;
  public mostrarModal = false;
  // tslint:disable-next-line: variable-name
  private _key: string;

  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _firebaseServ: FirebaseService) { }

  async ngOnInit() {
    this.esRecepcionista = this._authServ.user.tipo === 'cliente' ? false : true;

    if (this.esRecepcionista) {
      // console.log('Es recepcionista');
      await this.obtenerTurnos().subscribe((turnos) => {
        this.turnos = turnos;
        // console.log(turnos);
        this.manageList();
      });
    } else {
      await this.obtenerTurnos(this._authServ.user.key).subscribe((turnos) => {
        this.turnos = turnos;
        this.manageList();
      });
    }
  }

  public async manageList() {
    // console.log('En manage list', this.turnos);
    const auxTurnosArr = new Array<any>();

    for (const turnoA of this.turnos) {
      // console.log(turnoA);
      const auxCliente = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, turnoA.cliente))
        .data()) as Usuario;
      const auxEspecialista = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, turnoA.especialista))
        .data()) as Usuario;

      const auxTurno: any = {
        key: turnoA.key,
        cliente: auxCliente.nombre + ' - ' + auxCliente.apellido,
        clienteFoto: auxCliente.foto,
        especialista: auxEspecialista.nombre + ' - ' + auxEspecialista.apellido,
        especialistaFoto: auxEspecialista.foto,
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

  private obtenerTurnos(clienteKey?: string) {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.turnos)
      .pipe(
        map(retorno => {
          const auxLista = retorno.map(a => {
            const data: Turno = a.payload.doc.data() as Turno;
            data.key = a.payload.doc.id;
            return data;
          });

          // console.log(auxLista, clienteKey);
          let auxReturn = new Array<Turno>();
          if (clienteKey !== undefined) {
            for (const turno of auxLista) {
              // console.log(clienteKey, turno.cliente);
              if (turno.cliente === clienteKey) {
                auxReturn.push(turno);
              }
            }
          } else {
            auxReturn = auxLista;
          }
          return auxReturn;
        })
      );
  }

  public manejarEliminar(event: string) {
    this.mostrarModal = true;
    this._key = event;
    // console.log('Event del manejar eliminar', event);
  }

  public async manejarConfirmacion(event: { respuesta: boolean, key: string }) {
    // console.log('Respuesta del modal', event);
    this.mostrarModal = false;
    if (event.respuesta) {
      await this._firebaseServ.actualizarDocumento(diccionario.db.turnos, event.key, { estado: diccionario.estado_turno.cancelado });
    }
    this._key = '';
  }
}
