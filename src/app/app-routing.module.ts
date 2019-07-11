import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable: max-line-length
// Components
import { LoginContainerComponent } from './pages/login/login-container/login-container.component';
import { RegistroContainerComponent } from './pages/registro/registro-container/registro-container.component';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { AltaTurnoContainerComponent } from './pages/alta-turno/alta-turno-container/alta-turno-container.component';
import { HomeRecepcionistaComponent } from './pages/home-recepcionista/home-recepcionista.component';
import { ListadoTurnosContainerComponent } from './pages/listado-turnos/listado-turnos-container/listado-turnos-container.component';
import { HomeEspecialistaComponent } from './pages/home-especialista/home-especialista.component';
import { DiagnosticoContainerComponent } from './pages/diagnostico/diagnostico-container/diagnostico-container.component';
import { ReseniaContainerComponent } from './pages/resenia/resenia-container/resenia-container.component';
import { EstadisticasLogueosContainerComponent } from './pages/estadisticas-logueos/estadisticas-logueos-container/estadisticas-logueos-container.component';
import { EstadisticasEspecialidadContainerComponent } from './pages/estadisticas-especialidad/estadisticas-especialidad-container/estadisticas-especialidad-container.component';
import { EstadisticasEspecialidadTerminadosContainerComponent } from './pages/estadisticas-turnos/estadisticas-especialidad-terminados-container/estadisticas-especialidad-terminados-container.component';
import { EstadisticasEspecialidadRecepcionistaContainerComponent } from './pages/estadisticas-turnos/estadisticas-especialidad-recepcionista-container/estadisticas-especialidad-recepcionista-container.component';
import { EstadisticasUsadosContainerComponent } from './pages/estadisticas-especialidades/estadisticas-usados-container/estadisticas-usados-container.component';
import { EstadisticasComentariosContainerComponent } from './pages/estadisticas-comentarios/estadisticas-comentarios-container/estadisticas-comentarios-container.component';
import { EstadisticaFechasContainerComponent } from './pages/estadistica-fechas/estadistica-fechas-container/estadistica-fechas-container.component';

// Guards
import { LoggedInGuard } from './guards/loggedIn/logged-in.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { ClienteGuard } from './guards/cliente/cliente.guard';
import { RecepcionistaGuard } from './guards/recepcionista/recepcionista.guard';
import { ClienteRecepcionistaGuard } from './guards/combos/cliente-recepcionista.guard';
import { EspecialistaGuard } from './guards/especialista/especialista.guard';
import { LoggedOutGuard } from './guards/loggedOut/logged-out.guard';

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent, canActivate: [LoggedOutGuard] },
  { path: 'registro', component: RegistroContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'home-cliente', component: HomeClienteComponent, canActivate: [LoggedInGuard, ClienteGuard] },
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'estadisticas-registro', component: EstadisticasLogueosContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'estadisticas-especialidad', component: EstadisticasEspecialidadContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'estadisticas-realizados', component: EstadisticasEspecialidadTerminadosContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'estadisticas-recepcionista', component: EstadisticasEspecialidadRecepcionistaContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'estadisticas-usados', component: EstadisticasUsadosContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'estadisticas-comentarios', component: EstadisticasComentariosContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'estadisticas-fechas', component: EstadisticaFechasContainerComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'home-recepcionista', component: HomeRecepcionistaComponent, canActivate: [LoggedInGuard, RecepcionistaGuard] },
  { path: 'alta-turno', component: AltaTurnoContainerComponent, canActivate: [LoggedInGuard, ClienteRecepcionistaGuard] },
  { path: 'listado-turno', component: ListadoTurnosContainerComponent, canActivate: [LoggedInGuard, ClienteRecepcionistaGuard] },
  { path: 'home-especialista', component: HomeEspecialistaComponent, canActivate: [LoggedInGuard, EspecialistaGuard] },
  { path: 'diagnostico/:id', component: DiagnosticoContainerComponent, canActivate: [LoggedInGuard] },
  { path: 'encuesta/:id', component: ReseniaContainerComponent, canActivate: [LoggedInGuard] },
  { path: '', redirectTo: '/home-cliente', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
