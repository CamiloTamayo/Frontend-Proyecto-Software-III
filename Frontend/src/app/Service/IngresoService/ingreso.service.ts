import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IngresoModule} from "../../Module/ingreso/ingreso.module";

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  url = 'http://'+localStorage.getItem('ip')+'/api/ingresos';

  constructor(private http: HttpClient) { }

  getIngresos():Observable<any>{
    return this.http.get(this.url);
  }

  getIngresosCedula(cedula:string):Observable<any>{
    return this.http.get(this.url+'/'+cedula+'-user');
  }

  getIngreso(id:string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveIngreso(ingreso:IngresoModule):Observable<any> {
    return this.http.post(this.url+'/'+ingreso.usuario+'/'+ingreso.lugar, '');
  }

  editIngreso(id:string, ingreso:IngresoModule):Observable<any>{
    return this.http.put(this.url+'/'+id, ingreso);
  }

  deleteIngreso(id:string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
