class No{
    constructor(valor, proximo = null){
        this.valor = valor;
        this.proximo = proximo;
    }
}
class Iterator_LinkedList{

    constructor(atual) {
        this.elemento = atual;
    }

    hasNext(){
        if(this.elemento.proximo == null){
            return false;
        }else{
            return true;
        }
    }

    getProximo(){
        this.elemento = this.elemento.proximo;
        return this.elemento;
    }
}
class LinkedList {
    constructor (primeiro, ultimo, tamanho){
        this.tamanho = 0
    }

    adicionar(novoValor){
        let novoElemento = new No(novoValor);
        if(this.primeiro == null & this.ultimo == null){
            this.primeiro = novoElemento;
            this.ultimo = novoElemento;
        }else{
            this.ultimo.proximo = novoElemento;
            this.ultimo = novoElemento;
        }
        this.tamanho++;
    }

    get(posicao){
        if(posicao > this.tamanho){
            console.log("Posicao maior que o tamanho do vetor")
            return;
        }
        let atual = this.primeiro;
        for(let i = 0; i < posicao; i++){
            if(atual.proximo != null){
                atual = atual.proximo;
            }
        }
        return atual;

    }

    remover(valor){
        let anterior = null;
        let atual = this.primeiro;
        for(let i = 0; i < this.tamanho; i++){
            if(atual.valor == valor){
                if(this.tamanho == 1){
                    this.primeiro = null;
                    this.ultimo = null;
                }else if(atual == this.primeiro){
                    this.primeiro = atual.proximo;
                    atual = null
                }else if (atual == this.ultimo){
                    this.ultimo = anterior;
                    anterior.proximo = null;
                }else{
                    anterior.proximo = atual.proximo;
                    atual = null;
                }
                this.tamanho--;
                break;
            }
            anterior = atual;
            atual = atual.proximo;
        }
    }

    getIterator(){
        return new Iterator_LinkedList(this.primeiro)
    }


}

function main(){
    vetor_vs_linkedList();
    
}

function testing_linkedList(){
    let lista_ligada = new LinkedList();
    lista_ligada.adicionar("AC");
    lista_ligada.adicionar("BA")
    lista_ligada.adicionar("CE")
    lista_ligada.adicionar("DF")

    lista_ligada.remover("CE")
    lista_ligada.adicionar("SP")
    lista_ligada.remover("BA")

    console.log("Tamanho: "+ lista_ligada.tamanho)
    console.log("Primeiro: "+ lista_ligada.primeiro.valor)
    console.log("Ultimo: "+ lista_ligada.ultimo.valor)


    for(let i = 0; i < lista_ligada.tamanho; i++){
        console.log(lista_ligada.get(i).valor);
    }
}
function vetor_vs_linkedList(){
     //Escrita
        let linkedList = new LinkedList();

        let vetor = new Array();

        let limit = 100000;

        let init = new Date().getTime();
        for (let i = 0; i < limit; i++)
        {
            vetor.push(i);
        }
        let end = new Date().getTime();

        console.log("Adicionou: "+ limit+" elementos no vetor\n Tempo decorrido: "+ (end - init));


        init = new Date().getTime();
        for (let i = 0; i < limit; i++)
        {
            linkedList.adicionar(i);
        }
        end = new Date().getTime();

        console.log("Adicionou: "+ limit+" elementos na lista-ligada\n Tempo decorrido: "+ (end - init));

        //Leitura 

        init = new Date().getTime();
        for (let i = 0; i < vetor.length; i++)
        {
            vetor.at(i);
        }
        end = new Date().getTime();
        console.log("Leitura de: "+ limit+" elementos no vetor\n Tempo decorrido: "+ (end - init));


        init = new Date().getTime();
        let iterator = linkedList.getIterator();
        while(iterator.hasNext()){
            iterator.getProximo()
        }
        end = new Date().getTime();
        console.log("Leitura de: "+ limit+" elementos no linked_list\n Tempo decorrido: "+ (end - init));
}

main()