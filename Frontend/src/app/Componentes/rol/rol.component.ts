import { Component, OnInit } from '@angular/core';
import {RolService} from "../../Service/RolService/rol.service";
import {RolModule} from "../../Module/rol/rol.module";

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  listaRoles:any = [];
  rolNuevo:RolModule = {codigoRol:'', nombreRol:''};
  constructor(private rolService:RolService) { }

  ngOnInit(): void {
    this.listarRoles();
  }

  listarRoles(){
    this.rolService.getRoles().subscribe({
      next: (result:any) =>{
        console.log(result);
        this.listaRoles = result;
      },
      error:(err:any)=>console.log(err)
    });
  }

  crearRol(){
    this.rolService.saveRol(this.rolNuevo).subscribe({
      next: () =>{
        this.ngOnInit()
      },
      error:(err:any)=>console.log(err)
    });
  }

  eliminarRol(id:string){
    this.rolService.deleteRol(id).subscribe({
      next: () =>{
        this.ngOnInit()
      },
      error:(err:any)=>console.log(err)
    });
  }
}
