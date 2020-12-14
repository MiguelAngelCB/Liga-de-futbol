import { Injectable } from '@angular/core';
import {Equipo} from '../model/Equipo';
import {Jornada} from '../model/Jornada';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private locales:Array<string>=["A",
    "B",
    "C",
    "D",
    "E"];

  visitantes:Array<string>=["F",
    "G",
    "H",
    "I",
    "J",];

  private _numeroVueltas:number=2;
  private _numeroEquipos:number= this.locales.length * 2;
  private _numeroPartidos:number= this._numeroEquipos / 2;
  private _numeroJornadasVuelta:number=this._numeroEquipos - 1;
  private _numeroTotalJornadas:number=this._numeroJornadasVuelta * this._numeroVueltas;
  private _listaJornadas:Array<Jornada>= new Array<Jornada>(this._numeroTotalJornadas);
  private _equiposLocales:Array<Equipo>;
  private _equiposVisitantes:Array<Equipo>;


  constructor() {
    this._equiposLocales = this.generarEquipos(this.locales);
    this._equiposVisitantes = this.generarEquipos(this.visitantes);
  }

  generarEquipos(nombreEquipos:Array<string>):Array<Equipo>{
    let listaEquipos:Array<Equipo>=new Array<Equipo>(this._numeroPartidos);
    for (let i = 0; i < this._numeroPartidos; i++) {
      listaEquipos[i]=new Equipo(nombreEquipos[i]);
    }
    return listaEquipos;
  }

  get equiposLocales (): Array<Equipo> {
    return this._equiposLocales;
  }

  get equiposVisitantes (): Array<Equipo> {
    return this._equiposVisitantes;
  }

  get numeroVueltas (): number {
    return this._numeroVueltas;
  }

  get numeroEquipos (): number {
    return this._numeroEquipos;
  }

  get numeroPartidos (): number {
    return this._numeroPartidos;
  }

  get numeroJornadasVuelta (): number {
    return this._numeroJornadasVuelta;
  }

  get numeroTotalJornadas (): number {
    return this._numeroTotalJornadas;
  }
}
