import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { map } from 'rxjs/operators';
import { diccionario } from 'src/app/models/diccionario';
import { Turno } from 'src/app/models/turno/turno';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-estadisticas-especialidad-container',
  templateUrl: './estadisticas-especialidad-container.component.html',
  styleUrls: ['./estadisticas-especialidad-container.component.css']
})
export class EstadisticasEspecialidadContainerComponent implements OnInit, OnDestroy {
  public estadisticas: Array<{ especialista: string, especialidad: string, turnos: number }>;
  // tslint:disable-next-line: variable-name
  private _turnos: Array<Turno>;
  // tslint:disable-next-line: variable-name
  private _especialistas: Array<Usuario>;
  // tslint:disable-next-line: variable-name
  private _especialistasObs: Subscription;
  // tslint:disable-next-line: variable-name
  private _turnosObs: Subscription;
  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this._especialistasObs = this.obtenerEspecialistas().subscribe(especialistas => {
      this._especialistas = especialistas;
      this.manageList();
    });
    this._turnosObs = this.obtenerTurnos().subscribe((turnos) => {
      this._turnos = turnos;
      // console.log(turnos);
      this.manageList();
    });
  }

  ngOnDestroy() {
    if (this._turnosObs) { this._turnosObs.unsubscribe(); }
    if (this._especialistasObs) { this._especialistasObs.unsubscribe(); }
  }

  private manageList() {
    // console.log(this._turnos);

    if (this._especialistas !== undefined && this._turnos !== undefined) {
      const lista = new Array<{ especialista: string, especialidad: string, turnos: number }>();

      for (const especialistaA of this._especialistas) {
        const auxLista = this._turnos.filter((turno: Turno) => {
          return turno.especialista === especialistaA.key;
        });

        const auxEstadistica = { especialista: especialistaA.correo, especialidad: especialistaA.especialidad, turnos: auxLista.length };
        lista.push(auxEstadistica);
      }

      this.estadisticas = lista;
      // console.log(this.estadisticas);
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
}
