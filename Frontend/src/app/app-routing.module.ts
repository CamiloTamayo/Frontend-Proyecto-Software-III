import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import {LoginComponent} from "./Componentes/login/login.component";
import {RegistroUsuarioComponent} from "./Componentes/registro-usuario/registro-usuario.component";

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroUsuarioComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
