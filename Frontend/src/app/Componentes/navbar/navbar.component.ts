import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(private router:Router) {}

  inicio() {
    this.router.navigate(['/inicio']);
  }

  registro() {
    this.router.navigate(['/registro']);
  }

  carrera() {
    this.router.navigate(['/carrera']);
  }

  rol() {
    this.router.navigate(['/rol']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  qr() {
    this.router.navigate(['/qr']);
  }

  lugar() {
    this.router.navigate(['/lugar']);
  }

  controlIngreso() {
    this.router.navigate(['/controlIngreso']);
  }

  ingresoUsuario() {
    this.router.navigate(['/ingreso-usuario']);
  }
}
