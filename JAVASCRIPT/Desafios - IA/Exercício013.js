/* TÚLIO THAUÃ DUTRA */

//Soma de array
let a = [1,2,3,4,5]
let b = [6,7,8,9,10]
let size = a.length

//Process
function somaArray(a){
  let soma = 0
  for(let i = 0; i < size; i++){
     soma += a[i] + b[i]
  }
  return soma
}

//Exit
console.log(somaArray(a))
