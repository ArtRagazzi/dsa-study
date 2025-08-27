using System.Collections;

namespace Csharp;

public class Program
{
    public static void Main(string[] args)
    {

        LinkedListVSVetor();

    }

    static void LinkedListVSVetor()
    {
        Console.Clear();

        //Escrita
        LinkedList<int> linkedList = new LinkedList<int>();
        ArrayList vetor = new ArrayList();
        //List<T> é a forma generica da implementação, recomentada para app .net

        int limit = 10000;

        long init = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        for (int i = 0; i < limit; i++)
        {
            vetor.Add(i);
        }
        long end = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

        Console.WriteLine($"Adicionou: {limit} elementos no vetor\n Tempo decorrido: {end - init}");


        init = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        for (int i = 0; i < limit; i++)
        {
            linkedList.adicionar(i);
        }
        end = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();

        Console.WriteLine($"\n\nAdicionou: {limit} elementos na lista-ligada\n Tempo decorrido: {end - init}");

        //Leitura 

        init = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        for (int i = 0; i < vetor.Count; i++)
        {
            vetor.IndexOf(i);
        }
        end = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        Console.WriteLine($"\n----------------------------------------\nLeitura de: {limit} elementos no vetor\n Tempo decorrido: {end - init}");


        init = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        Iterator_LinkedList<int> iterator = linkedList.getIterator();
        while (iterator.hasNext())
        {
            iterator.getProximo();
        }
        end = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        Console.WriteLine($"\n\nLeitura de: {limit} elementos no lista-ligada\n Tempo decorrido: {end - init}");

    }

    static void TestingLinkedList()
    {
        LinkedList<string> lista = new LinkedList<string>();


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
