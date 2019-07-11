import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Subscription } from 'rxjs';
import { diccionario } from 'src/app/models/diccionario';
import { Turno } from 'src/app/models/turno/turno';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-estadistica-fechas-container',
  templateUrl: './estadistica-fechas-container.component.html',
  styleUrls: ['./estadistica-fechas-container.component.css']
})
export class EstadisticaFechasContainerComponent implements OnInit, OnDestroy {
  public especialistasSinTurnos: Array<{ especialista: string, dias: number }>;
  public entreFechas: number;
  // tslint:disable-next-line: variable-name
  private _turnos: Array<Turno>;
  // tslint:disable-next-line: variable-name
  private _especialistas: Array<Usuario>;
  // tslint:disable-next-line: variable-name
  private _turnosObs: Subscription;
  // tslint:disable-next-line: variable-name
  private _especialistasObs: Subscription;
  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this._turnosObs = this.obtenerTurnos().subscribe((turnos) => {
      // console.log(turnos);
      this._turnos = turnos;
    });

    this._especialistasObs = this.obtenerEspecialistas().subscribe((especialistas) => {
      this._especialistas = especialistas;
    });
  }

  ngOnDestroy() {
    if (this._turnosObs) { this._turnosObs.unsubscribe(); }
    if (this._especialistasObs) { this._especialistasObs.unsubscribe(); }
  }

  private obtenerTurnos() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.turnos)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Turno = a.payload.doc.data() as Turno;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  private obtenerEspecialistas() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.usuarios)
      .pipe(
        map(retorno => {
          const auxLista = retorno.map(a => {
            const data: Usuario = a.payload.doc.data() as Usuario;
            data.key = a.payload.doc.id;
            return data;
          });

          const auxReturn = new Array<Usuario>();
          for (const user of auxLista) {
            if (user.tipo === 'especialista') {
              auxReturn.push(user);
            }
          }

          return auxReturn;
        })
      );
  }

  public buscar(event: { fechaInicio: number, fechaFinal: number }) {
    this.entreFechas = undefined;
    // console.log('Recibo el event', event);
    this.entreFechas = this.compararTurnos(event);
    this.especialistasSinTurnos = this.compararEspecialistas(event);
  }

  private compararTurnos(fechas: { fechaInicio: number, fechaFinal: number }) {
    let listaTurnosEnFecha = new Array<Turno>();
    if (this._turnos !== undefined) {
      listaTurnosEnFecha = this._turnos.filter((turnoA: Turno) => {
        const auxDate = new Date(turnoA.fecha).getTime();
        const auxDateInicio = new Date(fechas.fechaInicio).getTime();
        const auxDateFinal = new Date(fechas.fechaFinal).getTime();

        // console.log(auxDate, auxDateInicio, auxDateFinal);
        if (auxDate >= auxDateInicio && auxDate <= auxDateFinal) {
          return true;
        } else {
          return false;
        }
      });

      // console.log(listaTurnosEnFecha);
    } else {
      console.log('No se puede acceder a los turnos');
    }
    return listaTurnosEnFecha.length;
  }

  private compararEspecialistas(fechas: { fechaInicio: number, fechaFinal: number }) {
    const auxReturn = new Array<{ especialista: string, dias: number }>();
    if (this._especialistas !== undefined && this._turnos !== undefined) {
      for (const especialistaA of this._especialistas) {
        let listaTurnos = this._turnos.filter((turno: Turno) => {
          return turno.especialista === especialistaA.key;
        });

        const resNoAbs = Math.abs((new Date(fechas.fechaInicio).getTime() - new Date(fechas.fechaFinal).getTime()) / 1000);
        // Obtener diferencia de días
        const diferenciaDias = Math.floor(resNoAbs / 86400);
       // console.log('Diferencia en días:', diferenciaDias);

        listaTurnos = listaTurnos.filter((turnoA: Turno) => {
          // console.log(turnoA);
          const fechaLimite = new Date(fechas.fechaFinal);
          const fechaAux = new Date(turnoA.fecha);
          let fechaCambiante = new Date(fechas.fechaInicio);

          while (fechaCambiante.getTime() <= fechaLimite.getTime()) {

            if (fechaAux.getDate() === fechaCambiante.getDate() &&
              fechaAux.getMonth() === fechaCambiante.getMonth() &&
              fechaAux.getFullYear() === fechaCambiante.getFullYear()) {
              return true;
            }
            fechaCambiante = new Date(fechaCambiante.getTime() + (1000 * 60 * 60 * 24));
          }

          return false;
        });

        let listaDias = new Array();
        for (const turno of listaTurnos) {
          const fechaAux = new Date(turno.fecha);

          listaDias.push(fechaAux.getDate() + '-' + fechaAux.getMonth() + '-' + fechaAux.getFullYear());
        }

        listaDias = listaDias.filter((elem, index, self) => {
          return index === self.indexOf(elem);
        });

       // console.log(listaTurnos, listaDias);

        auxReturn.push({ especialista: especialistaA.correo, dias: Math.abs(diferenciaDias - listaDias.length) });
        // console.log('Especialista', especialistaA.correo, 'Días', (diferenciaDias - listaTurnos.length));
      }
    }
   // console.log(auxReturn);
    return auxReturn;
  }
}
