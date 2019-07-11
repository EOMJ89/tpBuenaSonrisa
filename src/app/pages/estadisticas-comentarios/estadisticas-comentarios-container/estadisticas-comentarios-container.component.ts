import { Component, OnInit, OnDestroy } from '@angular/core';
import { Encuesta } from 'src/app/models/encuesta/encuesta';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { diccionario } from 'src/app/models/diccionario';
import { Turno } from 'src/app/models/turno/turno';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-estadisticas-comentarios-container',
  templateUrl: './estadisticas-comentarios-container.component.html',
  styleUrls: ['./estadisticas-comentarios-container.component.css']
})
export class EstadisticasComentariosContainerComponent implements OnInit, OnDestroy {
  public estadisticas: Array<{ especialista: string, comentarios: Array<Encuesta> }>;
  // tslint:disable-next-line: variable-name
  private _turnos: Array<Turno>;
  // tslint:disable-next-line: variable-name
  private _especialistas: Array<Usuario>;
  // tslint:disable-next-line: variable-name
  private _encuestas: Array<Encuesta>;
  // tslint:disable-next-line: variable-name
  private _especialistasObs: Subscription;
  // tslint:disable-next-line: variable-name
  private _turnosObs: Subscription;
  // tslint:disable-next-line: variable-name
  private _encuestasObs: Subscription;
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
    this._encuestasObs = this.obtenerEncuestas().subscribe((encuestas) => {
      this._encuestas = encuestas;
      this.manageList();
    });
  }

  ngOnDestroy() {
    if (this._turnosObs) { this._turnosObs.unsubscribe(); }
    if (this._especialistasObs) { this._especialistasObs.unsubscribe(); }
    if (this._encuestasObs) { this._encuestasObs.unsubscribe(); }
  }

  private async manageList() {
    // console.log(this._turnos);
    // console.log(this._encuestas);
    // console.log(this._especialistas);

    if (this._especialistas !== undefined && this._turnos !== undefined && this._encuestas !== undefined) {
      const listaMain = new Array<{ especialista: string, comentarios: Array<Encuesta> }>();
      for (const especialistaA of this._especialistas) {
        let listaEncuestas = new Array<Encuesta>();
        const auxTurnos = this._turnos.filter((turno: Turno) => {
          return turno.especialista === especialistaA.key && turno.estado === diccionario.estado_turno.terminado;
        });

        for (const turnoA of auxTurnos) {
          const auxEncuesta = (await this._firebaseServ.obtenerDocumento(diccionario.db.encuestas_cliente, 'turno', turnoA.key));
          // console.log(auxEncuesta);
          if (auxEncuesta !== false) {
            // console.log('Hay encuesta');
            listaEncuestas.push(auxEncuesta as Encuesta);
          }
        }
        // console.log('Sin filtrar', listaEncuestas);
        listaEncuestas = this.buscarPeorMejor(listaEncuestas);
        // console.log('Filtradas', listaEncuestas);
        const auxEstadistica = { especialista: especialistaA.correo, comentarios: listaEncuestas };
        listaMain.push(auxEstadistica);
      }

      this.estadisticas = listaMain;
      // console.log(this.estadisticas);
    }
  }

  private buscarPeorMejor(lista: Array<Encuesta>) {
    if (lista.length === 0 || lista.length === 1) {
      return lista;
    } else {
      lista = lista.sort(this.ordenarPorPuntaje);
      return new Array<Encuesta>(lista[0], lista[lista.length - 1]);
    }
  }

  private ordenarPorPuntaje(a: Encuesta, b: Encuesta) {
    if (a.especialista > b.especialista) { return 1; }
    if (a.especialista < b.especialista) { return -1; }
    return 0;
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

  private obtenerEncuestas() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.encuestas_cliente)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Encuesta = a.payload.doc.data() as Encuesta;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }
}
