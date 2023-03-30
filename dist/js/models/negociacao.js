export class Negociacao {
    constructor(_data, // public readonly date: Date,
    quantidade, //private _quantidade:number,
    valor //private _valor:number
    ) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    /*
    get quantidade():number{
        return this._quantidade;
    }
    get valor():number{
        return this._valor;
    }*/
    get valume() {
        return this.quantidade * this.valor;
    }
}
