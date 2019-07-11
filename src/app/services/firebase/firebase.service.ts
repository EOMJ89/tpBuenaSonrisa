import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // tslint:disable-next-line: variable-name
  constructor(private _db: AngularFirestore, private _storage: AngularFireStorage) { }

  public agregar(database: string, documento: any) {
    return this._db.collection(database).add(documento).then((result: DocumentReference) => {
      // console.log('Id del nuevo registro', result.id);
      return result;
    })
      .catch((err) => {
        console.log('Error en agregar del servicio', err);
      });
  }

  public obtenerDocumento(database: string, campoComparacion: string, valorComparacion: string) {
    return this._db.collection(database).ref.where(campoComparacion, '==', valorComparacion).get().then((documento) => {
      if (documento.docs.length > 0) {
        const auxReturn = documento.docs[0].data();
        auxReturn.key = documento.docs[0].id;

        return auxReturn;
      } else {
        return false;
      }
    }).catch(err => {
      console.log('Error en obtenerdocumento', err);
      return false;
    });
  }

  public obtenerDocumentoUID(database: string, iud: string) {
    return this._db.collection(database).doc(iud).get().toPromise();
  }

  public obtenerDocumentosFiltro(database: string, campoComparacion: string, valorComparacion: string) {
    return this._db.collection(database).ref.where(campoComparacion, '==', valorComparacion).get().then((documento) => {
      const auxReturn: Array<any> = new Array<any>();
      for (const doc of documento.docs) {
        const auxDoc = doc.data();
        auxDoc.key = doc.id;

        auxReturn.push(auxDoc);
      }

      return auxReturn;
    });
  }

  public obtenerDocumentosTodos(database: string) {
    return this._db.collection(database).snapshotChanges();
  }

  public actualizarDocumento(database: string, key: string, datos: any) {
    return this._db.collection(database).doc(key).ref.update(datos)
      .then(() => {
        // console.log('Documento actualizado');
      })
      .catch(err => {
        console.log('Error al actualizar documento', err);
      });
  }

  public agregarArchivo(nombre: string, archivo: File) {
    return this._storage.ref(nombre).put(archivo).then((taskSnapshot: UploadTaskSnapshot) => {
      // console.log('Subida exitosa del archivo');
      return taskSnapshot;
    })
      .catch(err => {
        console.log('Error en agregarArchivo', err);
      });
  }
}
