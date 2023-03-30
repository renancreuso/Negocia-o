export class Negociacoes {
    constructor() {
        this.listaNegociacoes = []; // ou Array<Negociacao> =[];
    }
    adiciona(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    lista() {
        return this.listaNegociacoes;
    }
}
