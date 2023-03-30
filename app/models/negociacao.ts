export class Negociacao{
    
    constructor(
        private _data: Date,         // public readonly date: Date,
        public readonly quantidade: number, //private _quantidade:number,
        public readonly valor: number       //private _valor:number
    ){}
    
    get data(): Date{
        const data = new Date(this._data.getTime())
        return data;
    }
    /*
    get quantidade():number{
        return this._quantidade;
    }
    get valor():number{
        return this._valor;
    }*/
    get valume():number{
        return this.quantidade * this.valor;
    }
}

