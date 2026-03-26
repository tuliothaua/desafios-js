//Código JavaScript do programa Soma 2 Números
const prompt = require("prompt-sync")() //Adiciona pacote para entrada de dados

//Lê os numeros
const num1 = Number(prompt("1º Número: "))
const num2 = Number(prompt("2º Número: "))

const soma = num1 + num2 //calcula o resultado
console.log(`Soma é: ${soma}`) //Exibe o resultado