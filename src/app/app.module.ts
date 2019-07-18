// tslint:disable: max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';

// File drop
import { NgxFileDropModule } from 'ngx-file-drop';

// Services
import { AuthService } from './services/auth/auth.service';
import { FirebaseService } from './services/firebase/firebase.service';

// Componentes
import { LoginContainerComponent } from './pages/login/login-container/login-container.component';
import { LoginLazyComponent } from './pages/login/login-lazy/login-lazy.component';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { RegistroContainerComponent } from './pages/registro/registro-container/registro-container.component';
import { RegistroLazyComponent } from './pages/registro/registro-lazy/registro-lazy.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeRecepcionistaComponent } from './pages/home-recepcionista/home-recepcionista.component';
import { AltaTurnoContainerComponent } from './pages/alta-turno/alta-turno-container/alta-turno-container.component';
import { AltaTurnoLazyComponent } from './pages/alta-turno/alta-turno-lazy/alta-turno-lazy.component';
import { ListadoTurnosContainerComponent } from './pages/listado-turnos/listado-turnos-container/listado-turnos-container.component';
import { ListadoTurnosLazyComponent } from './pages/listado-turnos/listado-turnos-lazy/listado-turnos-lazy.component';
import { ModalComponent } from './pages/modal/modal/modal.component';
import { SalaEsperasContainerComponent } from './pages/sala-espera/sala-esperas-container/sala-esperas-container.component';
import { SalaEsperasLazyComponent } from './pages/sala-espera/sala-esperas-lazy/sala-esperas-lazy.component';
import { ModalConsultorioComponent } from './pages/modal-consultorio/modal-consultorio/modal-consultorio.component';
import { HomeEspecialistaComponent } from './pages/home-especialista/home-especialista.component';
import { ListadoEspecialistaContainerComponent } from './pages/listado-especialista/listado-especialista-container/listado-especialista-container.component';
import { ListadoEspecialistaLazyComponent } from './pages/listado-especialista/listado-especialista-lazy/listado-especialista-lazy.component';
import { ModalAusenteComponent } from './pages/modal-ausente/modal-ausente/modal-ausente.component';
import { ReseniaContainerComponent } from './pages/resenia/resenia-container/resenia-container.component';
import { ReseniaLazyComponent } from './pages/resenia/resenia-lazy/resenia-lazy.component';
import { DiagnosticoContainerComponent } from './pages/diagnostico/diagnostico-container/diagnostico-container.component';
import { DiagnosticoLazyComponent } from './pages/diagnostico/diagnostico-lazy/diagnostico-lazy.component';
import { DiagnosticoMostrarLazyComponent } from './pages/diagnostico/diagnostico-mostrar-lazy/diagnostico-mostrar-lazy.component';
import { ReseniaMostrarLazyComponent } from './pages/resenia/resenia-mostrar-lazy/resenia-mostrar-lazy.component';
import { EstadisticasLogueosContainerComponent } from './pages/estadisticas-logueos/estadisticas-logueos-container/estadisticas-logueos-container.component';
import { EstadisticasLogueosLazyComponent } from './pages/estadisticas-logueos/estadisticas-logueos-lazy/estadisticas-logueos-lazy.component';
import { EstadisticasEspecialidadContainerComponent } from './pages/estadisticas-especialidad/estadisticas-especialidad-container/estadisticas-especialidad-container.component';
import { EstadisticasEspecialidadLazyComponent } from './pages/estadisticas-especialidad/estadisticas-especialidad-lazy/estadisticas-especialidad-lazy.component';
import { EstadisticasEspecialidadTerminadosContainerComponent } from './pages/estadisticas-turnos/estadisticas-especialidad-terminados-container/estadisticas-especialidad-terminados-container.component';
import { EstadisticasEspecialidadRecepcionistaContainerComponent } from './pages/estadisticas-turnos/estadisticas-especialidad-recepcionista-container/estadisticas-especialidad-recepcionista-container.component';
import { EstadisticasEspecialidadRecepcionistaLazyComponent } from './pages/estadisticas-turnos/estadisticas-especialidad-recepcionista-lazy/estadisticas-especialidad-recepcionista-lazy.component';
import { EstadisticasUsadosContainerComponent } from './pages/estadisticas-especialidades/estadisticas-usados-container/estadisticas-usados-container.component';
import { EstadisticasComentariosContainerComponent } from './pages/estadisticas-comentarios/estadisticas-comentarios-container/estadisticas-comentarios-container.component';
import { EstadisticasComentariosLazyComponent } from './pages/estadisticas-comentarios/estadisticas-comentarios-lazy/estadisticas-comentarios-lazy.component';
import { EstadisticaFechasContainerComponent } from './pages/estadistica-fechas/estadistica-fechas-container/estadistica-fechas-container.component';
import { EstadisticaFechasLazyComponent } from './pages/estadistica-fechas/estadistica-fechas-lazy/estadistica-fechas-lazy.component';
import { EstadisticaFechasTurnosLazyComponent } from './pages/estadistica-fechas/estadistica-fechas-turnos-lazy/estadistica-fechas-turnos-lazy.component';
import { ClienteRegistroLazyComponent } from './pages/cliente-registro/cliente-registro-lazy/cliente-registro-lazy.component';
import { ClienteRegistroContainerComponent } from './pages/cliente-registro/cliente-registro-container/cliente-registro-container.component';

@NgModule({
  declarations: [
    AppComponent,

    // Componentes
    LoginContainerComponent,
    LoginLazyComponent,
    HomeClienteComponent,
    HomeAdminComponent,
    RegistroContainerComponent,
    RegistroLazyComponent,
    MenuComponent,
    HomeRecepcionistaComponent,
    AltaTurnoContainerComponent,
    AltaTurnoLazyComponent,
    ListadoTurnosContainerComponent,
    ListadoTurnosLazyComponent,
    ModalComponent,
    SalaEsperasContainerComponent,
    SalaEsperasLazyComponent,
    ModalConsultorioComponent,
    HomeEspecialistaComponent,
    ListadoEspecialistaContainerComponent,
    ListadoEspecialistaLazyComponent,
    ModalAusenteComponent,
    ReseniaContainerComponent,
    ReseniaLazyComponent,
    DiagnosticoContainerComponent,
    DiagnosticoLazyComponent,
    DiagnosticoMostrarLazyComponent,
    ReseniaMostrarLazyComponent,
    EstadisticasLogueosContainerComponent,
    EstadisticasLogueosLazyComponent,
    EstadisticasEspecialidadContainerComponent,
    EstadisticasEspecialidadLazyComponent,
    EstadisticasEspecialidadTerminadosContainerComponent,
    EstadisticasEspecialidadRecepcionistaContainerComponent,
    EstadisticasEspecialidadRecepcionistaLazyComponent,
    EstadisticasUsadosContainerComponent,
    EstadisticasComentariosContainerComponent,
    EstadisticasComentariosLazyComponent,
    EstadisticaFechasContainerComponent,
    EstadisticaFechasLazyComponent,
    EstadisticaFechasTurnosLazyComponent,
    ClienteRegistroLazyComponent,
    ClienteRegistroContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Forms
    FormsModule,
    ReactiveFormsModule,

    // File Drop
    NgxFileDropModule,

    // Firestore
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    AuthService,
    FirebaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
