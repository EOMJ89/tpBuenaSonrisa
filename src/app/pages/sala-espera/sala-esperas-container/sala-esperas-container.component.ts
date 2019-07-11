import { Component, OnInit, OnDestroy } from '@angular/core';
import { Consultorio } from 'src/app/models/consultorio/consultorio';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Turno } from 'src/app/models/turno/turno';

@Component({
  selector: 'app-sala-esperas-container',
  templateUrl: './sala-esperas-container.component.html',
  styleUrls: ['./sala-esperas-container.component.css']
})
export class SalaEsperasContainerComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: variable-name
  private _consultoriosObser: Subscription;
  public consultoriosMostrados: Array<any>;
  public mostrarModal = false;

  // tslint:disable-next-line: variable-name
  private _key = '';
  // tslint:disable-next-line: variable-name
  private _estado = '';
  // tslint:disable-next-line: variable-name
  private _intervalKey: any;
  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this._intervalKey = setInterval(() => { this.manejarConsultorios(); }, 10000);
    this.manejarConsultorios();
  }

  ngOnDestroy() {
    // console.log('No more observable');
    this.destruirObservable();
    clearInterval(this._intervalKey);
  }

  private async manejarConsultorios() {
    // console.log('pasáron treinta segundos');
    this._consultoriosObser = this.obtenerConsultorios().subscribe((consultorios: Array<Consultorio>) => {
      // console.log('Recibo un cambio');
      // console.log('Documentos recibidos', consultorios);
      this.manageConsultas(consultorios);
    });
  }

  private async destruirObservable() {
    if (this._consultoriosObser) {
      this._consultoriosObser.unsubscribe();
    }
  }

  private obtenerConsultorios() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.consultorios)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Consultorio = a.payload.doc.data() as Consultorio;
            data.key = a.payload.doc.id;
            return data;
          })
            .sort(this.ordenarPorNombre);
        }));
  }

  private async manageConsultas(consultorios: Array<Consultorio>) {
    const auxLista = new Array<any>();

    for (const consultorioA of consultorios) {
      // console.log(consultorioA);
      const auxMostrador: any = {
        key: consultorioA.key,
        codigo: consultorioA.codigo,
        estado: consultorioA.estado
      };

      if (consultorioA.estado === diccionario.estado_consultorio.disponible) {
        const auxTurno: Turno | null = await this.obtenerProximoTurno(consultorioA.codigo);
        if (auxTurno != null) {
          // console.log('Hay turnos');
          // console.log(auxTurno.fecha);
          const turnoTime = this.esTurnoDeHoy(auxTurno.fecha);
          // console.log(turnoTime);
          switch (turnoTime) {
            case 0: {
              // console.log('El turno es futuro');
              break;
            }
            case -1: {
              // console.log('El turno es pasado');
              break;
            }
            default: {
              auxMostrador.estado = diccionario.estado_consultorio.por_ser_usado;
              // console.log('El turno es proximo');
              break;
            }
          }
        }
      }

      auxLista.push(auxMostrador);
    }

    this.consultoriosMostrados = auxLista;
    // console.log('Consultorios', this.consultoriosMostrados);
  }

  private async obtenerProximoTurno(sala: string) {
    let turnos: Array<Turno> = await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.turnos, 'sala', sala);
    turnos.filter((f: Turno) => {
      return f.estado === diccionario.estado_turno.pedido;
    });

    if (turnos.length > 0) {
      turnos = turnos.sort(this.ordenarPorFecha);
      turnos = turnos.filter((turno: Turno) => {
        const fecha = new Date(turno.fecha);
        const fechaActual = new Date();

        if (fecha.getDate() === fechaActual.getDate() &&
          fecha.getMonth() === fechaActual.getMonth() &&
          fecha.getFullYear() === fechaActual.getFullYear()) {
          return true;
        } else {
          return false;
        }
      });
      // console.log(turnos);
      return turnos[0];
    } else {
      return null;
    }
  }

  private ordenarPorFecha(a: Turno, b: Turno): number {
    const fechaA = new Date(a.fecha).getTime();
    const fechaB = new Date(b.fecha).getTime();

    if (fechaA > fechaB) { return 1; }
    if (fechaA < fechaB) { return -1; }
    return 0;
  }

  private esTurnoDeHoy(fecha: string) {
    let auxReturn = 0; // Turno futuro
    const fechaProxima = new Date(fecha).getTime();
    const fechaActual = new Date().getTime();
    const resNoAbs = (fechaProxima - fechaActual) / 1000;
    // console.log('Proxima', fechaProxima, 'Actual', fechaActual, 'Resultado', resNoAbs);

    // Obtener diferencia de días
    const days = Math.floor(resNoAbs / 86400);
    // console.log('Diferencia en días:', days);

    if (days === 0) {
      // Obtener Diferencia en horas
      const hours = Math.floor(resNoAbs / 3600) % 24;
      // console.log('Diferencia en horas:', hours);
      if (hours === 0) {
        // Diferencia en minutos
        const minutes = Math.floor(resNoAbs / 60) % 60;
        // console.log('Diferencia en minutos:', minutes);

        if (minutes >= 0) {
          if (minutes <= 15) {
            auxReturn = 1; // turno proximo
          }
        } else {
          auxReturn = -1; // turno pasado
        }
      } else {
        auxReturn = -1; // turno pasado
      }
    } else {
      auxReturn = -1; // turno pasado
    }


    return auxReturn;
  }

  private ordenarPorNombre(a: Consultorio, b: Consultorio): number {
    if (a.codigo > b.codigo) { return 1; }
    if (a.codigo < b.codigo) { return -1; }
    return 0;
  }

  public habilitarConsultorio(event: { key: string, estado: string }) {
    this.mostrarModal = true;
    this._key = event.key;
    this._estado = event.estado;
    // console.log(event);
  }

  public async manejarConfirmacion(event: { key: string, estado: string, respuesta: boolean }) {
    this.mostrarModal = false;
    if (event.respuesta) {
      let partialData = { estado: diccionario.estado_consultorio.disponible };
      if (event.estado !== diccionario.estado_consultorio.no_disponible) {
        partialData = { estado: diccionario.estado_consultorio.no_disponible };
      }
      // console.log('Recibo el output para habilitar el consultorio', event);
      await this._firebaseServ.actualizarDocumento(diccionario.db.consultorios, event.key, partialData);
    } else {
      this.mostrarModal = false;
    }
  }
}
