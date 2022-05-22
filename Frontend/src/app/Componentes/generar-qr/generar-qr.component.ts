import { Component} from '@angular/core';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import {UsuarioService} from "../../Service/UsuarioService/usuario.service";

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.component.html',
  styleUrls: ['./generar-qr.component.css']
})
export class GenerarQRComponent{

  elementType = NgxQrcodeElementTypes.URL;
  value: string = "localhost:4200/ingreso/";
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  token:string = "";

  constructor(private usuarioService:UsuarioService) {
    this.token = this.usuarioService.getToken();
    this.value += this.token;
  }
}
