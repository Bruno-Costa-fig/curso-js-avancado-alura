class NegociacaoController {

    constructor(){
        
        /* Aqui nós vamos imitar um pouco do JQuery;
        
        Nós podemos utilizar o $ para receber a função de pegar os inputs,
        mas para isso precisamos pasar no bind o -document- pois ele é interno
        ao document inicial e não funionaram externamente.
        
        */
        let $ = document.querySelector.bind(document);

        /* 
            Outra coisa que fizemos aqui foi agilizar a busca no DOM
            para que não seja preciso percorrer várias vezes ele. Por
            isso vamos usar os inputs como propriedades da busca do $.

            Funciona como uma espécie de cache
        */

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        /*
            Pelo que eu entendi o model que esta sendo passado como parâmetro
            é o própiro this._listaNegociacoes. Porém isso não ta explicito,
            mas sabemos que quando a função for executada ela vai pedir o
            parâmetro model e este está marcado que é para ser this, ou seja,
            a própria instância que a chamou. 
           
            Aqui também se não usassemos a arrow function ia dar problema de escopo e teriamos
            que usar Reflection.apply passando o this como contexto
         */

        this._listaNegociacoes = new ListaNegociacoes(model =>
            this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = "Negociação criada com sucesso";
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
    }

    apaga(){
        // apaga as negociações
        this._listaNegociacoes.esvazia();

        // retornando mensagem para o usuário
        this._mensagem.texto = "Negociações apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}