namespace Csharp;

public class Program
{
    public static void Main(string[] args){

        LinkedList lista = new LinkedList();


        lista.adicionar("AC");
        lista.adicionar("BA");
        lista.adicionar("CE");

        Console.WriteLine($"Tamanho: {lista.Tamanho}");
        Console.WriteLine($"Primeiro :{lista.Primeiro.Valor}");
        Console.WriteLine($"Ultimo :{lista.Ultimo.Valor}");

        Console.WriteLine(lista.get(1).Valor);

    }
}
