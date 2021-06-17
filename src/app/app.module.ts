import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoChatComponent } from './components/video-chat/video-chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { AuthService } from './services/auth.service';
import { AspirantesService } from './services/aspirantes.service';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterAComponent } from './components/register-a/register-a.component';
import { RegisterEComponent } from './components/register-e/register-e.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoChatComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    EmpresaComponent,
    AspiranteComponent,
    RegisterAComponent,
    RegisterEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    AuthService,
    AspirantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
