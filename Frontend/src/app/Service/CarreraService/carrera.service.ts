import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarreraModule} from "../../Module/carrera/carrera.module";

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  url = 'http://54.82.157.135/api/carreras';
  constructor(private http: HttpClient) { }

  getCarreras(){
    return this.http.get(this.url);
  }

  getCarrera(id:string){
    return this.http.get(this.url+"/"+id);
  }

  saveCarrera(carrera:CarreraModule):Observable<any>{
    return this.http.post(this.url, carrera);
  }

  editCarrera(id:string, carrera:CarreraModule):Observable<any>{
    return this.http.put(this.url+"/"+id, carrera);
  }

  deleteCarrera(id:string):Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }
}
