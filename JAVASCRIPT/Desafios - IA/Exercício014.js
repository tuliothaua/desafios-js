/* TÚLIO THAUÃ DUTRA */

//Tabela de Multiplicação
let array = [0,1,2,3,4,5,6,7,8,9,10]
let arraySize = array.length
let number = 7 //the number u want to know the multiplication table

//Process
function multiplication(number){
    let resultado = 0
    for(let i = 0; i < arraySize; i++){
      resultado = number * i
      console.log(`${number} X ${i} = ${resultado}`)
    }
}

//Calling the function
console.log(multiplication(number))
