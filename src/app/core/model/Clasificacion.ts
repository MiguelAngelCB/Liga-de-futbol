import {Equipo} from './Equipo';
import {Jornada} from './Jornada';

export class Clasificacion {
    private _equipos:Array<Equipo>=new Array<Equipo>();

    constructor (private jornada:Jornada) {
        this.rellernarEquipos(this.jornada.equiposLocal);
        this.rellernarEquipos(this.jornada.equiposVisitante);
        this.ordenarClasificacion();
    }

    private rellernarEquipos (equipos:Array<Equipo>):void {
        let inicio:number=this._equipos.length;
        for (let i = inicio,j=0; i < equipos.length+inicio; i++,j++) {
            this._equipos[i] = new Equipo(equipos[j].nombre);
            this._equipos[i].posicion = i;
            this._equipos[i].puntos = equipos[j].puntos;
            this._equipos[i].golesFavor = equipos[j].golesFavor;
            this._equipos[i].golesContra = equipos[j].golesContra;
        }
    }

    establecerPosicion():void{
        for (let i = 0; i < this._equipos.length; i++) {
            this._equipos[i].posicion=i+1;
        }
    }

    ordenarClasificacion():void{
        let cambiar:boolean=false;
        do {
            cambiar=false;
            for (let i = 0; i < this._equipos.length-1; i++) {
                if (!this._equipos[i].compararEquipo(this._equipos[i+1])){
                    let auxEquipo:Equipo=this._equipos[i];
                    this._equipos[i]=this._equipos[i+1];
                    this._equipos[i+1]=auxEquipo;
                    cambiar=true;
                    this.establecerPosicion();
                }
            }
        }while (cambiar);
    }

    get equipos (): Array<Equipo> {
        return this._equipos;
    }
}
