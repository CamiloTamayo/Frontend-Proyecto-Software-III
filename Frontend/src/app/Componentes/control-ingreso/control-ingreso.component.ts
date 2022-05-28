import {Component, ViewChild, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import {IngresoService} from "../../Service/IngresoService/ingreso.service";
import {Router} from "@angular/router";
import {LugarService} from "../../Service/LugarService/lugar.service";

@Component({
  selector: 'app-control-ingreso',
  templateUrl: './control-ingreso.component.html',
  styleUrls: ['./control-ingreso.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ControlIngresoComponent implements AfterViewInit {
  scanResult: any = '';
  lugarTemp:string = "";
  listaLugares: any = [];
  lugarSeleccionado: string = '';

  @ViewChild(QrScannerComponent, {static: false}) qrScannerComponent!: QrScannerComponent;

  constructor(
    private router: Router,
    private ingresoService: IngresoService,
    private lugarService:LugarService,
  ) {
    this.listarLugares();
  }

  ngAfterViewInit(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
      let array:any = result.split('/');
      this.router.navigate([array[array.length-2]+'/'+array[array.length-1]+'/'+this.obtenerIdLugar()]);
    });
  }

  listarLugares(){
    this.lugarService.getLugares().subscribe({
      next: (result:any) =>{
        console.log("Lugar "+result);
        this.listaLugares = result;
      },
      error:(err:any)=>console.log(err)
    });
  }
  obtenerIdLugar():string{
    let idLugar = '';
    for (let lugar of this.listaLugares){
      if(lugar.nombre == this.lugarSeleccionado){
        idLugar = lugar.codigoLugar;
      }
    }
    return idLugar;
  }

  capturar(){
    this.lugarTemp = this.lugarSeleccionado;
  }
}
