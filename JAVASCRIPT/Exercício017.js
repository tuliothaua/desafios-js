/* Túlio Thauã Dutra */

//Calculando a média de um aluno
let nota1 = 9
let nota2 = 7
let nota3 = 9

//Creating the process
function calcularMedia(nota1,nota2,nota3){
    let soma = (nota1 + nota2 + nota3)
    let resultado = soma / 3;
    
    return resultado.toFixed(2)
}

//Creating the exit
console.log(calcularMedia(nota1,nota2,nota3))
