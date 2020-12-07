import {Component} from '@angular/core';
import {Liga} from '../core/model/Liga';
import {Jornada} from '../core/model/Jornada';
import {Partido} from '../core/model/Partido';
import {Calendario} from '../core/model/Calendario';
import {NavigationExtras, Router} from '@angular/router';
import {Fecha} from '../core/model/Fecha';
import {Clasificacion} from '../core/model/Clasificacion';
import {LigaService} from '../core/servicios/liga.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private estado:string="jornada";
  private liga:Liga;
  private numeroJornada:number=0;
  private calendario=new Calendario();
  private fecha:Fecha=this.establecerFecha();

  constructor(public router:Router,public service:LigaService) {
    this.liga=new Liga(service);
  }

  establecerFecha():Fecha{
    let contador:number=0;
    let dia:string;
    for (let i = 0; i < this.calendario.fechas.length; i++) {
      dia=this.calendario.diaSemana(i);
      if (dia=="miércoles" || dia=="sábado"){
        contador++;
      }
      if (contador==this.numeroJornada+1){
        return this.calendario.fechas[i];
      }
    }
    return this.calendario.fechas[0];
  }

  retrocederJornadas():void{
    if (this.numeroJornada>0){
      this.numeroJornada--;
      this.fecha=this.establecerFecha();
    }
  }
  avanzarJornadas():void{
    if (this.numeroJornada<this.getJornada().length-1){
      this.numeroJornada++;
      this.fecha=this.establecerFecha();
    }
  }

  getJornadaPosicion(posicion:number):Jornada{
    return this.liga.conseguirJornada(posicion);
  }

  getClasificacion(posicion:number):Clasificacion{
    return this.liga.conseguirClasificacion(posicion);
  }

  getJornada():Array<Jornada>{
    return this.liga.listaJornadas;
  }

  async verCronologia(partido:Partido){
    let extrasNavegacion: NavigationExtras = {
      state: {
        partido: partido,
      },
    };
    await this.router.navigate(["cronologia"],extrasNavegacion);
  }

  esMorado(posicion){
    return posicion%2==0
  }
  esCeleste(posicion){
    return posicion%2!=0
  }
}
