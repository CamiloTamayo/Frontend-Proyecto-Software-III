import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RolModule} from "../../Module/rol/rol.module";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = 'http://54.82.157.135/api/roles';
  constructor(private http: HttpClient) { }

  getRoles():Observable<any>{
    return this.http.get(this.url);
  }

  getRol(id:string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveRol(rol:RolModule):Observable<any>{
    return this.http.post(this.url, rol);
  }

  editRol(id:string, rol:RolModule):Observable<any>{
    return this.http.put(this.url+'/'+id, rol);
  }

  deleteRol(id:string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
