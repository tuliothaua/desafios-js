//Túlio Thauã Dutra >>

/* Somador de numero x até x! */
let number = 10

function somador(number){
  let soma = 0
  for(i = 0; i <= number; i++){
    soma += i;
  }
  return soma;
}

//Spitting on the screen
console.log(somador(number))
