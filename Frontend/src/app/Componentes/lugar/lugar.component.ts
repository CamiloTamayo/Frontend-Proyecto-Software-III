import { Component, OnInit } from '@angular/core';
import {LugarService} from "../../Service/LugarService/lugar.service";
import {LugarModule} from "../../Module/lugar/lugar.module";

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {
  listaLugares:any = [];
  lugarNuevo:LugarModule = {codigoLugar:'0', direccion:'', nombre: '', tipo: ''};
  constructor(private lugarService:LugarService) { }

  ngOnInit(): void {
    this.listarLugares();
  }

  listarLugares(){
    this.lugarService.getLugares().subscribe({
      next: (result:any) =>{
        console.log(result);
        this.listaLugares = result;
      },
      error:(err:any)=>console.log(err)
    });
  }

  crearLugar(){
    console.log(this.lugarNuevo);
    this.lugarService.saveLugar(this.lugarNuevo).subscribe({
      next: () =>{
        this.ngOnInit()
      },
      error:(err:any)=>console.log(err)
    });
  }

  eliminarLugar(id:string){
    this.lugarService.deleteLugar(id).subscribe({
      next: () =>{
        this.ngOnInit()
      },
      error:(err:any)=>console.log(err)
    });
  }
}
