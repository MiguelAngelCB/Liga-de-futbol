import {Jornada} from './Jornada';
import {Equipo} from './Equipo';
import {Clasificacion} from './Clasificacion';
import {LigaService} from '../servicios/liga.service';

export class Liga{
    private _listaJornadas:Array<Jornada>;
    private _numeroVueltas:number;
    private _numeroEquipos:number;
    private _numeroPartidos:number;
    private _numeroJornadasVuelta:number;
    private _numeroTotalJornadas:number;
    private _equiposLocales:Array<Equipo>;
    private _equiposVisitantes:Array<Equipo>;

    constructor(private _servicios:LigaService) {
        this.iniciarLiga();
    }

    private iniciarLiga () {
        this._numeroVueltas = this._servicios.numeroVueltas;
        this._numeroEquipos = this._servicios.numeroEquipos;
        this._numeroPartidos = this._servicios.numeroPartidos;
        this._numeroJornadasVuelta = this._servicios.numeroJornadasVuelta;
        this._numeroTotalJornadas = this._servicios.numeroTotalJornadas;
        this._listaJornadas = new Array<Jornada>(this._numeroTotalJornadas);
        this._equiposLocales = this._servicios.equiposLocales;
        this._equiposVisitantes = this._servicios.equiposVisitantes;
    }

    generarJornadas(posicion:number):void {
            let jornada: Jornada = new Jornada(this._equiposLocales, this._equiposVisitantes);
            this._listaJornadas[posicion] = jornada;
            this.cambiarEnfrentamientos();
            this.generarVuelta(posicion);
    }


    private generarVuelta(posicion: number) {
        if (posicion + 1 == this._numeroJornadasVuelta) {
            this.cambiarEquiposVuelta();
        }
    }

    cambiarEquiposVuelta(){
        let aux=this._equiposLocales;
        this._equiposLocales=this._equiposVisitantes;
        this._equiposVisitantes=aux;
    }

    cambiarEnfrentamientos(){
        this._equiposLocales.splice(1,0,this._equiposVisitantes.shift());
        this._equiposVisitantes.push(this._equiposLocales.pop());
    }

    conseguirJornada(posicion:number):Jornada{
        this.comprobarJornada(posicion);
        return this._listaJornadas[posicion];
    }

    conseguirClasificacion(posicion:number):Clasificacion{
        this.comprobarJornada(posicion);
        return this._listaJornadas[posicion].clasificacion;
    }

    private comprobarJornada (posicion: number) {
        if (this._listaJornadas[posicion] == undefined) {
            this.generarJornadas(posicion);
        }
    }

    get listaJornadas(): Jornada[] {
        return this._listaJornadas;
    }

}
