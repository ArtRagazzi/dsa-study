class No{
    constructor(valor, proximo){
        this.valor = valor;
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


}

function main(){
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

main()