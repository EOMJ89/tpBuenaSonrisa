import { Component, OnInit, OnDestroy } from '@angular/core';
import { Turno } from 'src/app/models/turno/turno';
import { Usuario } from 'src/app/models/usuario/usuario';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Subscription } from 'rxjs';
import { diccionario } from 'src/app/models/diccionario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-estadisticas-especialidad-recepcionista-container',
  templateUrl: './estadisticas-especialidad-recepcionista-container.component.html',
  styleUrls: ['./estadisticas-especialidad-recepcionista-container.component.css']
})
export class EstadisticasEspecialidadRecepcionistaContainerComponent implements OnInit, OnDestroy {
  public estadisticas: Array<{ tipo: string, turnos: number }>;
  // tslint:disable-next-line: variable-name
  private _turnos: Array<Turno>;
  // tslint:disable-next-line: variable-name
  private _turnosObs: Subscription;
  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this._turnosObs = this.obtenerTurnos().subscribe((turnos) => {
      this._turnos = turnos;
      // console.log(turnos);
      this.manageList(true);
    });
  }

  ngOnDestroy() {
    if (this._turnosObs) { this._turnosObs.unsubscribe(); }
  }

  private manageList(modo: boolean) {
    // console.log(this._turnos);
    if (this._turnos !== undefined) {
      const auxClientes = this._turnos.filter((turno: Turno) => {
        return turno.turnoRealizadoPor === true;
      });
      const auxRecepcionistas = this._turnos.filter((turno: Turno) => {
        return turno.turnoRealizadoPor === false;
      });

      const estatCliente = { turnos: auxClientes.length, tipo: 'Clientes' };
      const estatRecepcionista = { turnos: auxRecepcionistas.length, tipo: 'Recepcionista' };
      this.estadisticas = new Array<{ tipo: string, turnos: number }>(estatCliente, estatRecepcionista);
    }
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
}

