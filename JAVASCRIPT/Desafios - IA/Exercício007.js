/* Túlio Thauã Dutra >> */
//Inverter uma palavra no JavaScript
let wordUser = "Thaua"

let wordReversed = wordUser.split("").reverse().join("");
// Thauã Anotações:
// split: quebra a palavra em letras
// reverse: coloca as letra de trás pra frente obs: só funciona em array
// join: cola tudo de volta na string
// colocar ("") ele vai cortar entre cada caractere

console.log(wordReversed)

//Saída Esperada:
/*auahT*/
