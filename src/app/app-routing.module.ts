import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { DelTrabajoComponent } from './components/del-trabajo/del-trabajo.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterAComponent } from './components/register-a/register-a.component';
import { RegisterEComponent } from './components/register-e/register-e.component';
import { RegisterTComponent } from './components/register-t/register-t.component';
import { RegisterComponent } from './components/register/register.component';
import { VerAspiranteComponent } from './components/ver-aspirante/ver-aspirante.component';
import { VerTrabajoComponent } from './components/ver-trabajo/ver-trabajo.component';
import { VideoChatComponent } from "./components/video-chat/video-chat.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'videoChat', component: VideoChatComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'aspirante', component: AspiranteComponent },
  { path: 'registerA', component: RegisterAComponent },
  { path: 'registerE', component: RegisterEComponent },
  { path: 'verAspirante', component: VerAspiranteComponent },
  { path: 'verTrabajo', component: VerTrabajoComponent },
  { path: 'registerT', component: RegisterTComponent },
  { path: 'delTrabajo', component: DelTrabajoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
