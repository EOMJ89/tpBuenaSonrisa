import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { map } from 'rxjs/operators';
import { Logueo } from 'src/app/models/logueo/logueo';
import { Usuario } from 'src/app/models/usuario/usuario';

@Component({
  selector: 'app-estadisticas-logueos-container',
  templateUrl: './estadisticas-logueos-container.component.html',
  styleUrls: ['./estadisticas-logueos-container.component.css']
})
export class EstadisticasLogueosContainerComponent implements OnInit, OnDestroy {
  public logueos: Array<any>;
  // tslint:disable-next-line: variable-name
  public _logueosAux: Array<Logueo>;
  // tslint:disable-next-line: variable-name
  private _logueosObs: Subscription;
  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: FirebaseService) { }

  ngOnInit() {
    this._logueosObs = this.obtenerDatos().subscribe((logueos) => {
      this._logueosAux = logueos;
      this.manageList();
      // console.log(logueos);
    });
  }

  ngOnDestroy() {
    if (this._logueosObs) {
      this._logueosObs.unsubscribe();
    }
  }

  private obtenerDatos() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.logueos)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Logueo = a.payload.doc.data() as Logueo;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  public async manageList() {
    // console.log('En manage list', this.turnos);
    const lista = new Array<any>();

    for (const logueoA of this._logueosAux) {
      const auxUsuario = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, logueoA.usuario))
        .data()) as Usuario;
      // console.log(auxUsuario);
      if (auxUsuario !== undefined) {
        const auxLogueo: any = {
          key: logueoA.key,
          fecha: logueoA.fechaLogueo,
          usuario: auxUsuario.correo,
          tipo: auxUsuario.tipo,
        };

        lista.push(auxLogueo);
      }
    }

    this.logueos = lista;
    // console.log('En manage list', this.logueos);
  }
}
