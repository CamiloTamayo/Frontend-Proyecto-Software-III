import { Component, OnInit } from '@angular/core';
import {UsuarioModule} from "../../Module/usuario/usuario.module";
import {UsuarioService} from "../../Service/UsuarioService/usuario.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  date = new Date();

  usuarioNuevo:UsuarioModule={cedula:'', nombres:'',apellidos:'', fecha_nacimiento:'', direccion:'',correo:'',celular:'',codigo_carrera:'',codigo_rol:'1', password:''};
  usuarioActual:UsuarioModule={cedula:'', nombres:'',apellidos:'', fecha_nacimiento:'', direccion:'',correo:'',celular:'',codigo_carrera:'',codigo_rol:'1', password:''};
  constructor(private usuarioService:UsuarioService, private router:Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario(this.usuarioService.getToken()).subscribe({
      next: (result:any) =>{
        this.usuarioActual = result;
      }
    })
  }

  agregarUsuario(){
    this.usuarioService.saveUsuario(this.usuarioNuevo).subscribe({
      next: () =>{
        this.router.navigate(['/inicio'])
      },
      error:(err:any)=>console.log(err)
    });
  }
}
