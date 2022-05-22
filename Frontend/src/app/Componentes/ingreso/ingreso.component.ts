import { Component, OnInit } from '@angular/core';
import {IngresoService} from "../../Service/IngresoService/ingreso.service";
import {Router} from "@angular/router";
import {UsuarioService} from "../../Service/UsuarioService/usuario.service";
import {LugarService} from "../../Service/LugarService/lugar.service";
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  listaIngresos:any = [];
  listaLugares:any = [];
  lugar: any;
  cedula: any;

  ingresoNuevo:any = { codigoIngreso: '0', fecha: 'this.formatFecha()', lugar: '', usuario: ''};
  usuario:any = {cedula: '', nombre: '', rol: ''}

  constructor(private ingresoService:IngresoService,
              private router:Router,
              private usuarioService:UsuarioService,
              private lugarService:LugarService,
              private rutaActiva: ActivatedRoute
  ) {
    this.listarLugares();
  }

  ngOnInit(): void {
    this.listarIngresos();
    this.crearIngreso();
    this.listarIngresos();
  }

  listarIngresos(){
    this.ingresoService.getIngresos().subscribe({
      next: (result:any) =>{this.listaIngresos= result},
      error:(err:any)=>console.log(err)
    });
  }

  listarLugares(){
    this.lugarService.getLugares().subscribe({
      next: (result:any) =>{
        this.listaLugares = result;
      },
      error:(err:any)=>console.log(err)
    });
  }

  crearIngreso(){
    this.ingresoNuevo.lugar = this.rutaActiva.snapshot.paramMap.get('lugar');
    this.ingresoNuevo.usuario = this.rutaActiva.snapshot.paramMap.get('cedula');
    this.usuarioService.getUsuario(this.ingresoNuevo.usuario).subscribe({
      next: (result:any) =>{
        console.log(result.nombre);
        this.usuario.cedula = result.cedula;
        this.usuario.nombre = result.nombres+' '+result.apellidos;
        this.usuario.rol = result.rol;
        console.log("CEDULA "+this.usuario.cedula);
      },
      error:(err:any)=>console.log(err)
    });
    this.ingresoService.saveIngreso(this.ingresoNuevo).subscribe({
      next: (result:any) =>{
        console.log(result);
      },
      error:(err:any)=>console.log(err)
    });
  }


  volver(){
    this.router.navigate(['/controlIngreso']);
  }
}
