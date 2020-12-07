import {Equipo} from './Equipo';
import {Registro} from './Registro';

export class Partido{
    private _registros:Array<Registro>;
    private _local:number=0;
    private _visitante:number=1;
    private _victoria:number=3;
    private _empate:number=1;

    constructor(private equipos:Array<Equipo>) {
        this._registros=new Array<Registro>(this.equipos.length);
        this.crearRegistros();
        this.jugar();
        this.establecerPuntos();
    }

    private establecerPuntos(){
        if (this.golesEquipoLocal>this.golesEquipoVisitante){
            this.equipoLocal.aumentarPuntos(this._victoria);
        }else if(this.golesEquipoLocal==this.golesEquipoVisitante){
            this.equipoLocal.aumentarPuntos(this._empate);
            this.equipoVisitante.aumentarPuntos(this._empate);
        }else {
            this.equipoVisitante.aumentarPuntos(this._victoria);
        }
    }


    private jugar():void{
        let tiempo:number=90;
        let minPosibilidades:number=1;
        let maxPosibilidades:number=16;
        for (let min = 0; min < tiempo; min++) {
            let random:number=this.generarAleatorio(1,maxPosibilidades);
            if (random<=minPosibilidades){
                let ganador:number=this.generarAleatorio(this._local,this._visitante);
                let perdedor:number=this.conseguirOtraPosicion(ganador);
                this.equipos[ganador].aumentarGolesFavor();
                this.equipos[perdedor].aumentarGolesContra();
                this._registros[ganador].aumentarGoles(min.toString());
                this._registros[perdedor].aumentarGoles("");
            }
        }
    }

    private conseguirOtraPosicion(posicion:number):number{
        for (let i = 0; i < this.equipos.length; i++) {
            if (i!=posicion){
                return i;
            }
        }
    }

    private generarAleatorio(min:number,max:number):number{
        return Math.floor(Math.random() * (max-min+1)+min);
    }

    private golesMarcador(posicion:number):number {
        return this._registros[posicion].marcador;
    }

    private conseguirEquipo(posicion:number):Equipo {
        return this.equipos[posicion];
    }

    get equipoVisitante():Equipo {
        return this.conseguirEquipo(this._visitante);
    }

    get equipoLocal():Equipo {
        return this.conseguirEquipo(this._local);
    }

    get golesEquipoVisitante():number {
        return this.golesMarcador(this._visitante);
    }

    get golesEquipoLocal():number {
        return this.golesMarcador(this._local);
    }

    get registroLocal():Registro {
        return this._registros[this._local];
    }
    get registroVisitante():Registro {
        return this._registros[this._visitante];
    }

    get totalGoles():number {
        return this._registros[this._local].goles.length;
    }

    private crearRegistros():void{
        for (let i = 0; i < this.equipos.length; i++) {
            this._registros[i]=new Registro();
        }
    }
}
