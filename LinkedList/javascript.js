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


}

function main(){
    let lista_ligada = new LinkedList();
    lista_ligada.adicionar("AC");
    lista_ligada.adicionar("BA")
    lista_ligada.adicionar("CA")

    console.log("Tamanho: "+ lista_ligada.tamanho)
    console.log("Primeiro: "+ lista_ligada.primeiro.valor)
    console.log("Ultimo: "+ lista_ligada.ultimo.valor)
    console.log("Segundo: "+ lista_ligada.get(1).valor)
    
    
}

main()