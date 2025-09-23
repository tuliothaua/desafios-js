//Verificador de PAR ou IMPAR com função e parâmetros

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    }
}

let number = 2;
let resultado = verificarParOuImpar(number);

console.log(resultado);
