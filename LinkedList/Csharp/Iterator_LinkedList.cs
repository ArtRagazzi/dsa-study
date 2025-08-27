namespace Csharp;

public class Iterator_LinkedList<T>
{
    private Elemento<T> elemento;

    public Iterator_LinkedList(Elemento<T> atual)
    {
        this.elemento = atual;
    }

    public bool hasNext()
    {
        if (elemento.proximo == null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    public Elemento<T> getProximo()
    {
        elemento = elemento.proximo;
        return elemento;
    }
    
}
