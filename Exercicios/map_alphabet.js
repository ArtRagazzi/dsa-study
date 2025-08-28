const alph = new Map()

alph.set(1,"a");
alph.set(2,"b");
alph.set(3,"c");
alph.set(4,"d");
alph.set(5,"e");
alph.set(6,"f");
alph.set(7,"g");
alph.set(8,"h");
alph.set(9,"i");
alph.set(10,"j");
alph.set(11,"k");
alph.set(12,"l");
alph.set(13,"m");
alph.set(14,"n");
alph.set(15,"o");
alph.set(16,"p");
alph.set(17,"q");
alph.set(18,"r");
alph.set(19,"s");
alph.set(20,"t");
alph.set(21,"u");
alph.set(22,"v");
alph.set(23,"w");
alph.set(24,"x");
alph.set(25,"y");
alph.set(26,"z");


function imprime_alph(num){
    let vet = []
    for(let i = 1; i<= num;i++){
        vet.push(alph.get(i))
    }

    console.log(vet)
}

imprime_alph(27)