//Soma de todos os números de 1 até X é Y

let numUser = 10

function somaAte(numUser) {
  
    let soma = 0
    for (i = 1; i <= numUser; i++){
      soma += i 
    }
    return soma;
}

let resultado = somaAte(numUser)

console.log(`A soma de todos os numeros até ${numUser} é: ${resultado}`)
