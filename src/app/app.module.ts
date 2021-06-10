import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoChatComponent } from './components/video-chat/video-chat.component';
import { LoginComponent } from './login/login.component';

import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeAComponent } from './home-a/home-a.component';
import { RegisterComponent } from './register/register.component';
import { HomeEComponent } from './home-e/home-e.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoChatComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeAComponent,
    RegisterComponent,
    HomeEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
