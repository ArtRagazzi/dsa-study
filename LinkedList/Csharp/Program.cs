namespace Csharp;

public class Program
{
    public static void Main(string[] args){

        LinkedList lista = new LinkedList();


        lista.adicionar("AC");
        lista.adicionar("BA");
        lista.adicionar("CE");
        lista.adicionar("DF");

        lista.remover("CE");

        lista.adicionar("SP");
        lista.remover("BA");

        Console.WriteLine($"Tamanho: {lista.Tamanho}");
        Console.WriteLine($"Primeiro :{lista.Primeiro.Valor}");
        Console.WriteLine($"Ultimo :{lista.Ultimo.Valor}");

        for (int i = 0; i < lista.Tamanho; i++)
        {
            Console.WriteLine(lista.get(i).Valor);
        }

    }
}
