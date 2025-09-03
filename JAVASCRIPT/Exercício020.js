/* Túlio Thauã Dutra */

//Calculando a idade de forma simples
let dataatual = 2025
let datanasc = 2009

//Creating the process
function calcularIdade(dataatual){
   
   let resultado = dataatual - datanasc
   return `Você vai completar, ${resultado} anos em ${dataatual}`
}

//Creating the exit
console.log(calcularIdade(dataatual))
