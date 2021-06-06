import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { RegisterComponent } from './register/register.component';
import { HomeAComponent } from './home-a/home-a.component';
import { HomeEComponent } from './home-e/home-e.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'home-a', component:HomeAComponent, canActivate:[AuthguardGuard]},
  { path: 'home-e', component:HomeEComponent, canActivate:[AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
