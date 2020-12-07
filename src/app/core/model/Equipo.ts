export class Equipo{
    private _posicion:number=0;
    private _puntos:number=0;
    private _golesFavor:number=0;
    private _golesContra:number=0;

    constructor(private _nombre:string) {
    }

    compararEquipo(equipo:Equipo):boolean{
        if (this.puntos>equipo.puntos){
            return true;
        }else if (this.puntos<equipo.puntos){
            return false;
        }
        if (this.golesFavor>equipo.golesFavor){
            return true;
        }else if (this.golesFavor<equipo.golesFavor){
            return false;
        }
        if (this.golesContra<equipo.golesContra){
            return true;
        }else if (this.golesContra>equipo.golesContra){
            return false;
        }
        if (this.posicion<equipo.posicion){
            return true;
        }else if (this.posicion>equipo.posicion){
            return false;
        }
        return false;
    }
    aumentarGolesFavor():void{
        ++this._golesFavor;
    }

    aumentarGolesContra():void{
        ++this._golesContra;
    }

    set posicion(value: number) {
        this._posicion = value;
    }

    get puntos(): number {
        return this._puntos;
    }

    aumentarPuntos(value: number) {
        this._puntos += value;
    }

    get nombre():string {
        return this._nombre;
    }

    get golesFavor(): number {
        return this._golesFavor;
    }

    get golesContra(): number {
        return this._golesContra;
    }

    get posicion(): number {
        return this._posicion;
    }


    set puntos (value: number) {
        this._puntos = value;
    }

    set golesFavor (value: number) {
        this._golesFavor = value;
    }

    set golesContra (value: number) {
        this._golesContra = value;
    }
}
