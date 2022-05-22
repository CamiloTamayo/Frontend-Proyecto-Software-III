import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlIngresoComponent } from './Componentes/control-ingreso/control-ingreso.component';
import { CrearCarreraComponent } from './Componentes/crear-carrera/crear-carrera.component';
import { IngresoComponent } from './Componentes/ingreso/ingreso.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { LugarComponent } from './Componentes/lugar/lugar.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { RolComponent } from './Componentes/rol/rol.component';
import {CookieService} from "ngx-cookie-service";
import {HttpClientModule} from "@angular/common/http";
import {RegistroUsuarioComponent} from "./Componentes/registro-usuario/registro-usuario.component";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {GenerarQRComponent} from "./Componentes/generar-qr/generar-qr.component";
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";

@NgModule({
  declarations: [
    AppComponent,
    ControlIngresoComponent,
    CrearCarreraComponent,
    GenerarQRComponent,
    IngresoComponent,
    InicioComponent,
    LoginComponent,
    LugarComponent,
    NavbarComponent,
    RegistroUsuarioComponent,
    RolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule,
  ],
  providers: [CookieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
