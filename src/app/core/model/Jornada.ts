import {Partido} from './Partido';
import {Equipo} from './Equipo';
import {Clasificacion} from './Clasificacion';

export class Jornada{
    private _listaPartidos:Array<Partido>=new Array<Partido>();
    private _clasificacion:Clasificacion;

    constructor(private _equiposLocal:Array<Equipo>, private _equiposVisitante:Array<Equipo>) {
        this.crearPartidos();
        this._clasificacion=new Clasificacion(this);
    }

    crearPartidos():void{
        for (let i = 0; i < this._equiposLocal.length; i++) {
            let equipos:Array<Equipo>=new Array<Equipo>();
            equipos.push(this._equiposLocal[i]);
            equipos.push(this._equiposVisitante[i]);
            let partido:Partido=new Partido(equipos);
            this._listaPartidos[i]=partido;
        }
    }

    get listaPartidos(): Array<Partido> {
        return this._listaPartidos;
    }


    get equiposLocal (): Array<Equipo> {
        return this._equiposLocal;
    }

    get equiposVisitante (): Array<Equipo> {
        return this._equiposVisitante;
    }

    get clasificacion (): Clasificacion {
        return this._clasificacion;
    }
}
