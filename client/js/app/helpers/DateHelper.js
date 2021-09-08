class DateHelper {

    constructor(){
        throw new Error('DateHelper cannot be instancied')
    }


    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('A data deve estar no formato ano-mes-dia')
        return new Date(...texto
            .split("-")
            /* 
                Aqui nós temos um problema. O nosso date está recebendo um array de numbers
                porém os meses são contados de 0 a 11 e na nossa interface nós passamos de 1 a 12.
                Para resolver isto vamos usar o .map para percorrer toda a array da data e pelo índice
                achar o mes (1) e diminuir -1 para ficar correto;   
            */

            // a própria Arrow Function já da o retorno
           .map((item, indice) => item - indice % 2 ))
    }

}