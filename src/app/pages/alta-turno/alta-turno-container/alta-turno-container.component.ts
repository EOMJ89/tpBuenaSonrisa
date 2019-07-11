import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Turno } from 'src/app/models/turno/turno';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Consultorio } from 'src/app/models/consultorio/consultorio';

@Component({
  selector: 'app-alta-turno-container',
  templateUrl: './alta-turno-container.component.html',
  styleUrls: ['./alta-turno-container.component.css']
})
export class AltaTurnoContainerComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _turnosEspecialista: Array<Turno>;
  // tslint:disable-next-line: variable-name
  private _turnosConsultorios: Array<Turno>;
  public especialistas: Array<Usuario>;
  public clientes: Array<Usuario>;
  // tslint:disable-next-line: variable-name
  private _mensaje = '';

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService, private _authServ: AuthService, private _router: Router) { }

  async ngOnInit() {
    this.especialistas = await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.usuarios, 'tipo', 'especialista');

    this.clientes = this._authServ.user.tipo === 'recepcionista' ?
      await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.usuarios, 'tipo', 'cliente') : null;
    // console.log(this.especialistas);
  }

  public async crearTurno(event: { especialista: string, fecha: string, cliente: string }) {
    this._mensaje = '';
    // console.log(event);
    // Fecha = 2019-07-26T08:15

    if (this.procesarFecha(event.fecha)) {
      // console.log('Fecha valida');
      this._turnosEspecialista = await this._firebaseServ
        .obtenerDocumentosFiltro(diccionario.db.turnos, 'especialista', event.especialista);
      this._turnosEspecialista = this._turnosEspecialista.filter((f: Turno) => {
        return f.fecha === event.fecha;
      });
      // console.log(this._turnosEspecialista);

      if (this._turnosEspecialista.length === 0) {
        // Puedo subir el turno pero debo darle sala
        const auxSala = await this.procesarSala(event.fecha);

        if (auxSala !== null) {
          // Puedo subir y tengo sala
          const auxTurno = {
            cliente: event.cliente,
            especialista: event.especialista,
            fecha: event.fecha,
            estado: diccionario.estado_turno.pedido,
            turnoRealizadoPor: this._authServ.user.tipo === 'cliente' ?
              diccionario.turno_realizado_por.cliente : diccionario.turno_realizado_por.recepcionista,
            sala: auxSala,
          } as Turno;

          // console.log(auxTurno);
          this._firebaseServ.agregar(diccionario.db.turnos, auxTurno)
            .then(() => {
              this._mensaje = 'Turno pedido exitosamente, su sala es la: ' + auxTurno.sala;
              // console.log('Turno pedido exitosamente, su sala es la :', auxTurno.sala);
            })
            .catch((err) => {
              this._mensaje = 'Error desconocido, reintente.';
              console.log('Error al subir turno', err);
            });
        } else {
          this._mensaje = 'No hay sala disponible, eliga otra fecha u hora.';
          // console.log('No tengo sala disponible para esa fecha');
        }
      } else {
        this._mensaje = 'El especialista pedido se encuentra ocupado en ese día u horario, eliga otro.';
        // console.log('Fecha invalida por que el especialista está ocupado');
      }
    } else {
      this._mensaje = 'Fecha u hora invalida.';
      // console.log('Fecha invalida por hora o día.');
    }
  }

  private procesarFecha(fecha: string) {
    const date: Date = new Date(fecha);
    let auxReturn = false;
   // console.log(date);

    switch (date.getMinutes()) {
      case 0:
      case 15:
      case 30:
      case 45: {
        auxReturn = true;
        break;
      }
      default: {
        auxReturn = false;
        break;
      }
    }


    if (auxReturn) {
      if (date.getDay() !== 0) {
        if (date.getHours() >= 8) {
          if (date.getDay() === 6) {
            if (date.getHours() <= 13) {
              auxReturn = true;
            } else {
              auxReturn = false;
            }
          } else {
            // console.log(date.getHours());
            if (date.getHours() <= 18) {
              auxReturn = true;
            } else {
              auxReturn = false;
            }
          }
        } else {
          auxReturn = false;
        }
      } else {
        auxReturn = false;
      }
    }

    return auxReturn;
  }

  private async procesarSala(fecha: string) {
    const salas = ['cons01', 'cons02', 'cons03', 'cons04', 'cons05', 'cons06', 'ons07', 'labImagenes', 'labMecanica'];
    let auxReturn = null;

    this._turnosConsultorios = await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.turnos, 'fecha', fecha);

    for (const sala of salas) {
      const auxTurnos = this._turnosConsultorios.filter((f: Turno) => {
        return f.sala === sala;
      });

      // console.log(auxTurnos);
      if (auxTurnos.length === 0) {
        const auxSala = await this._firebaseServ.obtenerDocumento(diccionario.db.consultorios, 'codigo', sala) as Consultorio;

        if (auxSala.estado !== diccionario.estado_consultorio.no_disponible) {
          auxReturn = sala;
          break;
        }
      }
    }

    return auxReturn;
  }
}
