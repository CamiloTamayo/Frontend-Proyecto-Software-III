import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../Service/UsuarioService/usuario.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {UsuarioModule} from "../../Module/usuario/usuario.module";

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent{

  date = new Date();

  usuarioNuevo:UsuarioModule={cedula:'', nombres:'',apellidos:'', fecha_nacimiento:'', direccion:'',correo:'',celular:'',codigo_carrera:'',codigo_rol:'1', password:''};
  constructor(private usuarioService:UsuarioService, private router:Router, public datepipe: DatePipe) { }

  agregarUsuario(){
    this.usuarioService.saveUsuario(this.usuarioNuevo).subscribe({
      next: (result:any) =>{
        this.router.navigate(['/inicio'])
      },
      error:(err:any)=>console.log(err)
    });
  }
}

