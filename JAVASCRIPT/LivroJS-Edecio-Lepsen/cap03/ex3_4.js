// Programa para Veterinária

const prompt = require("prompt-sync")()


//Entrada
let pesoKg = Number(prompt("Peso da Ração (kg): "))
let consumo = Number(prompt("Consumo Diário (gr): ")) 
const pesoGr = pesoKg * 1000

//Processamento
const duracao = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo


//Saída
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)