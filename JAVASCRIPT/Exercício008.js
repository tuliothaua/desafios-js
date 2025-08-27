//Túlio Thauã Dutra >>

/* Descubra o fatorial de algum número! */
let number = 5

function fatorial(number) {
    let resultado = 1
    for (i = 1; i <= number; i++) {
        resultado *= i;
    }
    return resultado;
}

//Spitting on the screen
console.log(fatorial(number))
