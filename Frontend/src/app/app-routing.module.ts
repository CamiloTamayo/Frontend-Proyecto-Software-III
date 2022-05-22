import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {LoginComponent} from "./Componentes/login/login.component";
import {RegistroUsuarioComponent} from "./Componentes/registro-usuario/registro-usuario.component";
import {CrearCarreraComponent} from "./Componentes/crear-carrera/crear-carrera.component";
import {RolComponent} from "./Componentes/rol/rol.component";
import {LugarComponent} from "./Componentes/lugar/lugar.component";
import {ControlIngresoComponent} from "./Componentes/control-ingreso/control-ingreso.component";
import {GenerarQRComponent} from "./Componentes/generar-qr/generar-qr.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroUsuarioComponent},
  {path: 'login', component:LoginComponent},
  {path:'carrera', component:CrearCarreraComponent},
  {path:'rol', component:RolComponent},
  {path: 'lugar', component:LugarComponent},
  {path: 'controlIngreso', component:ControlIngresoComponent},
  {path:'qr', component:GenerarQRComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
