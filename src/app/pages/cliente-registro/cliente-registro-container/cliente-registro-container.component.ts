import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Router } from '@angular/router';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Usuario } from 'src/app/models/usuario/usuario';
import { diccionario } from 'src/app/models/diccionario';

@Component({
  selector: 'app-cliente-registro-container',
  templateUrl: './cliente-registro-container.component.html',
  styleUrls: ['./cliente-registro-container.component.css']
})
export class ClienteRegistroContainerComponent {
  public mensaje = '';
  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _firebaseServ: FirebaseService, private _router: Router) { }

  public crearUsuario(event: any) {
    this.mensaje = '';
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
                this.mostrarMensaje('Error al registrar el usuario.');
                console.log('Error al registrar el usuario para login', err);
              });
          })
          .catch((err) => {
            this.mostrarMensaje('Error al agregar el usuario.');
            console.log('Error al agregar en la base de datos', err);
          });
      }).catch((err) => {
        this.mostrarMensaje('Error al ingresar la foto.');
        console.log('Error al crear archivo', err);
      });
  }

  private crearNombre(event: any) {
    const auxFotoNombre: string = diccionario.db.usuarios + '/'
      + event.correo + '_' + event.apellido + '.' + ((event.foto as File).type).split('/')[1];
    // console.log(auxFotoNombre);
    return auxFotoNombre;
  }

  public mostrarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    setTimeout(() => { if (this.mensaje !== '') { this.mensaje = ''; } }, 5000);
  }
}
