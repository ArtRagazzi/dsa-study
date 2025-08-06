namespace Csharp
{
    class Program
    {
        static void Main()
        {
            StringVetor();
        }
        static void VetorDef()
        {

            int[] meuVetor = new int[10];
            meuVetor[0] = 3;
            meuVetor[1] = 4;
            meuVetor[2] = 8;
            meuVetor[3] = 12;
            meuVetor[4] = 9;
            meuVetor[5] = 1;
            meuVetor[6] = 44;
            meuVetor[7] = 33;
            meuVetor[8] = 12;
            meuVetor[9] = 56;

            for (int i = 0; i < meuVetor.Length; i++)
            {

                Console.WriteLine(meuVetor[i]);
            }
        }


        static void StringVetor()
        {
            string[] estados = new string[10];
            estados[0] = "AC";
            estados[1] = "BA";
            estados[2] = "CE";
            estados[3] = "FG";
            estados[4] = "AM";
            estados[5] = "AP";
            estados[6] = "PB";
            estados[7] = "RN";
            estados[8] = "MS";
            estados[9] = "SP";

            for (int i = 0; i < estados.Length; i++)
            {
                Console.WriteLine("Estado: " + estados[i] + " Posição: " + i);
            }

            Console.WriteLine("Digite a sigla: ");
            string sigla = Console.ReadLine().ToUpper();

            bool existe = false;
            for (int i = 0; i < estados.Length; i++)
            {
                if (estados[i].Equals(sigla))
                {
                    existe = true;
                    break;
                }
            }
            if (existe)
            {
                Console.WriteLine("Encontrou!");
            }
            else
            {
                Console.WriteLine("Não Encontrou!");

            }
        }
    }
}