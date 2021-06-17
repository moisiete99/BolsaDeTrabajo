import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterAComponent } from './components/register-a/register-a.component';
import { RegisterEComponent } from './components/register-e/register-e.component';
import { RegisterComponent } from './components/register/register.component';
import { VideoChatComponent } from "./components/video-chat/video-chat.component";

const routes: Routes = [
  { path: '', component: VideoChatComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'aspirante', component: AspiranteComponent },
  { path: 'registerA', component: RegisterAComponent },
  { path: 'registerE', component: RegisterEComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
