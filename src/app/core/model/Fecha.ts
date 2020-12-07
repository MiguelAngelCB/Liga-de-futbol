export class Fecha {

    constructor(private _id: string, private _dia: string, private _diaSemana: string, private _semana: string) {
    }
    get id (): string {
        return this._id;
    }

    get dia (): string {
        return this._dia;
    }

    get diaSemana (): string {
        return this._diaSemana;
    }

    get semana (): string {
        return this._semana;
    }
}
