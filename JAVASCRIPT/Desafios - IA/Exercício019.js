/* Túlio Thauã Dutra */

//Calculando a média de um aluno e dando parabéns usando array
let notas = [7,7,7]

//Creating the process
function calcularMedia(notas){
   // let soma = (nota1 + nota2 + nota3)
    //let resultado = soma / 3;
    let soma = 0
    for(let i = 0; i < notas.length; i++){
        soma += notas[i]
    }
    
    resultado = soma / notas.length
    
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
console.log(calcularMedia(notas))
