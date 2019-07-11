import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { diccionario } from 'src/app/models/diccionario';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-container',
  templateUrl: './registro-container.component.html',
  styleUrls: ['./registro-container.component.css']
})
export class RegistroContainerComponent {

  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _firebaseServ: FirebaseService, private _router: Router) { }

  public crearUsuario(event: any) {
    // console.log('Recibo el event', event);
    const auxFotoNombre: string = this.crearNombre(event);

    // Subo el archivo
    this._firebaseServ.agregarArchivo(auxFotoNombre, (event.foto as File))
      .then(async (snapshot: UploadTaskSnapshot) => {
        // Coloco el path correcto y elimino la clave para subir el registro
        const auxFoto = await snapshot.ref.getDownloadURL();
        const auxUser: Usuario = event as Usuario;
        auxUser.foto = auxFoto;
        // console.log('User', auxUser);

        this._firebaseServ.agregar(diccionario.db.usuarios, auxUser)
          .then((result) => {
            // Agrego el usuario
            this._authServ.crear(event.correo, event.clave)
              .then((user) => {
               // console.log('Registro completo');
                this._router.navigate(['home-admin']);
              })
              .catch((err) => {
                console.log('Error al registrar el usuario para login', err);
              });
          })
          .catch((err) => {
            console.log('Error al agregar en la base de datos', err);
          });
      }).catch((err) => {
        console.log('Error al crear archivo', err);
      });
  }

  private crearNombre(event: any) {
    const auxFotoNombre: string = diccionario.db.usuarios + '/'
      + event.correo + '_' + event.apellido + '.' + ((event.foto as File).type).split('/')[1];
    // console.log(auxFotoNombre);
    return auxFotoNombre;
  }
}
