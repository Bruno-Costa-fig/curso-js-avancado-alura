/*
    Será usado para avisar ao usuário que os dados foram salvos na tabela.
*/

class Mensagem {
    constructor(texto=''){
        this._texto = texto;
    }
    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}
