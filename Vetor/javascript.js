

function main() {
    StringVetor();
}


function VetorDef() {

    let meuVetor = [10];

    meuVetor[0] = 3;
    meuVetor[1] = 31;
    meuVetor[2] = 12;
    meuVetor[3] = 21;
    meuVetor[4] = 5;
    meuVetor[5] = 1;
    meuVetor[6] = 6;
    meuVetor[7] = 8;
    meuVetor[8] = 15;
    meuVetor[9] = 64;

    for (let i = 0; i < meuVetor.length; i++) {
        console.log(meuVetor[i])
    }
}

function StringVetor() {
    let estados = [];
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

    for(let i = 0; i< estados.length;i++){
        console.log("Estado: "+ estados[i]);
    }

    // INPUT ()=>
    sigla = "BA"
    console.log("\nEscolha :"+ sigla)
    //
    let existe = false;

    for (let i = 0; i < estados.length; i++) {
        if (estados[i] === sigla) {
            existe = true;
            break;
        }
    }
    if (existe) {
        console.log("Encontrou")
    } else {
        console.log("Não econtrou");
    }

}


main();