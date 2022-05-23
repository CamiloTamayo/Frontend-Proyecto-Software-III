import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import { CookieService } from "ngx-cookie-service";
import {UsuarioModule} from "../../Module/usuario/usuario.module";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://54.82.157.135/api/usuarios';
  urlLogin = 'http://54.82.157.135/api/login';
  constructor(private http: HttpClient, private cookies: CookieService) { }

  getUsuarios():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUsuario(id: string):Observable<any>{
  return this.http.get(this.url+'/'+id);
  }

  saveUsuario(usuario :UsuarioModule):Observable<any>{
    return this.http.post(this.url, usuario);
  }

  login(correo :string, password: string):Observable<any>{
    return this.http.get(this.urlLogin+'/'+correo+'/'+password);
  }

  editUsuario(id:string, usuario:UsuarioModule):Observable<any>{
    return this.http.put(this.url+'/'+id, usuario);
  }

  deleteUsuario(id:string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }

  setToken(token:string){
    this.cookies.set("token", token,0.1);
  }

  getToken(){
      return this.cookies.get("token");
  }
}
