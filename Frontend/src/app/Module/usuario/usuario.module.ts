import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UsuarioModule {
  cedula:string;
  apellidos:string;
  celular:string;
  correo:string;
  direccion:string;
  fecha_nacimiento:string;
  nombres:string;
  codigo_carrera:string;
  codigo_rol:string;
  password:string;
}
