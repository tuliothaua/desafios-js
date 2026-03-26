//Código JavaScript do Programa Revenda

//Adiciona o pacote ao programa
const prompt = require("prompt-sync")()

//Lê os dados de entrada
const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))

//Calcula valor da entrada e parcelas
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12

//Exibe a respostas
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)
