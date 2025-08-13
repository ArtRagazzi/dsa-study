namespace Csharp;

public class No
{
    public string Valor {get;set;}
    public No proximo {get;set;}

    public No(string valor){
        this.Valor = valor;
    }
}
