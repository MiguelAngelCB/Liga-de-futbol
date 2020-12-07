export class Registro {
    private _goles:Array<string>=new Array<string>();
    private _marcador:number=0;

    constructor() {
        this._goles=new Array<string>();
    }

    aumentarGoles(min:string):void{
        this._goles.push(min);
        if (min!=""){
            this._marcador++;
        }
    }


    get goles(): Array<string> {
        return this._goles;
    }


    get marcador(): number {
        return this._marcador;
    }
}
