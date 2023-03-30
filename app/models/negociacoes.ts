import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private listaNegociacoes: Negociacao[] =[]; // ou Array<Negociacao> =[];

    adiciona(negociacao:Negociacao){
        this.listaNegociacoes.push(negociacao); 

    }
    
    lista(): readonly Negociacao[] { // ou ReadonlyArray<Negociacao>
        return this.listaNegociacoes;
    }
}



