namespace Csharp;

public class LinkedList<T>
{
    public Elemento<T> Primeiro {get;set;}
    public Elemento<T> Ultimo {get;set;}
    public int Tamanho {get;set;}

    public LinkedList(){
        this.Tamanho = 0;
    }


    public void adicionar(T novoValor){

        Elemento<T> novoElemento = new Elemento<T>(novoValor);
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


    public void remover(T valor)
    {

        Elemento<T> anterior = null;
        Elemento<T> atual = this.Primeiro;
        for (int i = 0; i < this.Tamanho; i++)
        {
            if (atual.Valor.Equals(valor))
            {
                if (this.Tamanho == 1)
                {
                    this.Primeiro = null;
                    this.Ultimo = null;
                }
                else if (atual == this.Primeiro)
                {
                    this.Primeiro = atual.proximo;
                    atual = null;
                }
                else if (atual == this.Ultimo)
                {
                    this.Ultimo = anterior;
                    anterior.proximo = null;
                }
                else
                {
                    anterior.proximo = atual.proximo;
                    atual = null;
                }
                this.Tamanho--;
                break;   

            }
            anterior = atual;
            atual = atual.proximo;
        }
        
    }

    public Elemento<T> get(int posicao){
        if(posicao > this.Tamanho){
            throw new IndexOutOfRangeException("Posição invalida");
        }
        Elemento<T> atual = this.Primeiro;
        for(int i=0; i < posicao; i++){
            if(atual.proximo != null){
                atual = atual.proximo;
            }
        }
        return atual;
    }

    public Iterator_LinkedList<T> getIterator()
    {
        return new Iterator_LinkedList<T>(this.Primeiro);
    }
}
