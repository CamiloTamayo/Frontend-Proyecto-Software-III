import { Component } from '@angular/core';
import { UsuarioService } from "src/app/Service/UsuarioService/usuario.service";
import {Router} from "@angular/router";
import {UsuarioModule} from "../../Module/usuario/usuario.module";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  correo: string = "";
  password: string = "";

  constructor(public userService: UsuarioService, private router:Router ) { }

  ingresar(){
    this.userService.login(this.correo, this.password).subscribe({
      next: (result:UsuarioModule) =>{console.log(result);
        this.userService.setToken(result.cedula);
        this.router.navigate(['/inicio'])
      },
      error:(err:any)=>console.log(err)
    });
  }
}
