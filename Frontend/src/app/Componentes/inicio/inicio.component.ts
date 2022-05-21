import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../Service/UsuarioService/usuario.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }
  lista:any=[];

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.getUsuarios().subscribe({
      next: (result:any) =>{this.lista = result},
    error:(err:any)=>console.log(err)
    });
  }

  eliminarUsuario(cedula:string){
    this.usuarioService.deleteUsuario(cedula).subscribe({
      next: (result:any) =>{
        this.ngOnInit();
      },
      error:(err:any)=>console.log(err)
    });
  }
}
