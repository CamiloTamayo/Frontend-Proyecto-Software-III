import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LugarModule} from "../../Module/lugar/lugar.module";

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  url='http://localhost:8080/api/lugares';
  urlIndividual='http://localhost:8080/api/lugar';

  constructor(private http: HttpClient) { }

  getLugares():Observable<any>{
    return this.http.get(this.url);
  }

  saveLugar(lugar:LugarModule):Observable<any>{
    console.log("CODIGO: "+lugar.codigoLugar)
    return this.http.post(this.url, lugar);
  }

  deleteLugar(id:string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
