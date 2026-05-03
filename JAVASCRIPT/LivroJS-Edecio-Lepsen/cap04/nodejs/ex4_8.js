//Add prompt-sync pack
const prompt = require("prompt-sync")()

//Reading the data
const value = Number(prompt("Purchase value R$: "))
const aux = Math.floor(value / 20) // number installment without conditions

//Process
const installment = aux == 0 ? 1 : aux > 6 ? 6 : aux
const valueInstallment = value / installment

//Exit
console.log(`You can pay in ${installment}x of R$: ${valueInstallment.toFixed(2)}`)
