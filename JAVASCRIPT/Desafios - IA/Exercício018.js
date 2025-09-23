/* Túlio Thauã Dutra */

//Calculando a média de um aluno e dando parabéns
let nota1 = 7
let nota2 = 7
let nota3 = 7

//Creating the process
function calcularMedia(nota1,nota2,nota3){
    let soma = (nota1 + nota2 + nota3)
    let resultado = soma / 3;
    
    if(resultado > 10){
        return "Valor Inválido!"
        
    } else if (resultado < 0){
        return "Valor Inválido!"
        
    }
    else if(resultado >= 7){
        return resultado.toFixed(2) + ", Parabéns você está na média!"
        
    } else if (resultado < 7){
        return resultado.toFixed(2) + ", Precisamos se esforçar mais!"
        
    }
    
}

//Creating the exit
console.log(calcularMedia(nota1,nota2,nota3))
