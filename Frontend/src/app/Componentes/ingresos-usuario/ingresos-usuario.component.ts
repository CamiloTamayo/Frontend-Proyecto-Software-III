import { Component, OnInit } from '@angular/core';
import {IngresoService} from "../../Service/IngresoService/ingreso.service";
import {UsuarioService} from "../../Service/UsuarioService/usuario.service";

@Component({
  selector: 'app-ingresos-usuario',
  templateUrl: './ingresos-usuario.component.html',
  styleUrls: ['./ingresos-usuario.component.css']
})
export class IngresosUsuarioComponent implements OnInit {

  listaIngresos:any = [];

  constructor(private ingresoService: IngresoService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarIngresos();
  }

  listarIngresos(){
    this.ingresoService.getIngresosCedula(this.usuarioService.getToken()).subscribe({
      next:(result:any) => {
        console.log(this.listaIngresos);
        this.listaIngresos = result;
      },
        error:(err:any)=>console.log(err)
    });
  }
}
