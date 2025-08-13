namespace Csharp;

public class LinkedList
{
    public No Primeiro {get;set;}
    public No Ultimo {get;set;}
    public int Tamanho {get;set;}

    public LinkedList(){
        this.Tamanho = 0;
    }


    public void adicionar(string novoValor){

        No novoElemento = new No(novoValor);
        if(Primeiro == null && Ultimo == null){
            this.Primeiro = novoElemento;
            this.Ultimo = novoElemento;
        }
        else{
            this.Ultimo.proximo = novoElemento;
            this.Ultimo = novoElemento;
        }
        this.Tamanho +=1;
    }


    public void remover (string valor){
        
    }

    public No get(int posicao){
        if(posicao > this.Tamanho){
            throw new IndexOutOfRangeException("Posição invalida");
        }
        No atual = this.Primeiro;
        for(int i=0; i < posicao; i++){
            if(atual.proximo != null){
                atual = atual.proximo;
            }
        }
        return atual;
    }
}
