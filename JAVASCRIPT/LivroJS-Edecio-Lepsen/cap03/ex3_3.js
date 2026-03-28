// Programa de Salário Quadriênios 

const prompt = require("prompt-sync")()

//Entrada
let salario = Number(prompt("Salário: "))
let tempo = Number(prompt("Tempo (anos): "))
let acrecimo = 0
let cont = 0


//Processo
acrecimo = salario * 0.01
for (i = 4; i <= tempo; i+=4){
    cont++ //cont quadrienios
}

for(i = 1; i <= cont; i++){
    salario += acrecimo //acrecimo no quadrienio
}


//Saída
console.log(`\nSalário: ${salario.toFixed(2)}`)
console.log(`Quadriênios: ${cont}`)