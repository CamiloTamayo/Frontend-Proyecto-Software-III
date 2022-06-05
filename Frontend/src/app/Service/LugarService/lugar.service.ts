import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LugarModule} from "../../Module/lugar/lugar.module";

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  url='http://'+localStorage.getItem('ip')+'/api/lugares';

  constructor(private http: HttpClient) { }

  getLugares():Observable<any>{
    return this.http.get(this.url);
  }

  saveLugar(lugar:LugarModule):Observable<any>{
    return this.http.post(this.url, lugar);
  }

  deleteLugar(id:string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
