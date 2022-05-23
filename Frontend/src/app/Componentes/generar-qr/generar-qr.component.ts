import { Component} from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import {UsuarioService} from "../../Service/UsuarioService/usuario.service";
import {UsuarioModule} from "../../Module/usuario/usuario.module";

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.css']
})
export class GenerarQRComponent{

  elementType = NgxQrcodeElementTypes.URL;
  value: string = "54.82.157.135/ingreso/";
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  token:string = "";
  cedula:string = "";
  nombre:string = "";

  constructor(private usuarioService:UsuarioService) {
    this.token = this.usuarioService.getToken();
    this.value += this.token;
    this.usuarioService.getUsuario(this.token).subscribe({
      next: (result:any) =>{
        this.cedula = result.cedula;
        this.nombre = result.nombres +" "+ result.apellidos;
      }
    })
  }
}
