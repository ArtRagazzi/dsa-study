namespace Csharp;

public class Elemento<T>
{
    public T Valor {get;set;}
    public Elemento<T> proximo {get;set;}

    public Elemento(T valor){
        this.Valor = valor;
    }
}
