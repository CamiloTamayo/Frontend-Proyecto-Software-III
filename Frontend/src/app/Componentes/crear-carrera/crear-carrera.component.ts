import { Component, OnInit } from '@angular/core';
import {CarreraService} from "../../Service/CarreraService/carrera.service";
import {CarreraModule} from "../../Module/carrera/carrera.module";

@Component({
  selector: 'app-crear-carrera',
  templateUrl: './crear-carrera.component.html',
  styleUrls: ['./crear-carrera.component.css']
})
export class CrearCarreraComponent implements OnInit {

  listaCarreras:any = [];
  carreraNueva:CarreraModule = {codigoCarrera:'0', nombreCarrera:''};

  constructor(private carreraService:CarreraService) { }

  ngOnInit(): void {
    this.listarCarreras();
  }

  listarCarreras(){
    this.carreraService.getCarreras().subscribe({
      next: (result:any) =>{
        this.listaCarreras = result;
      },
      error:(err:any)=>console.log(err)
    });
  }

  crearCarrera(){
    this.carreraService.saveCarrera(this.carreraNueva).subscribe({
      next: () =>{
        this.ngOnInit();
      },
      error:(err:any)=>console.log(err)
    });
  }

  eliminarCarrera(id:string){
    this.carreraService.deleteCarrera(id).subscribe({
      next: () =>{
        this.ngOnInit();
      },
      error:(err:any)=>console.log(err)
    });
  }
}
