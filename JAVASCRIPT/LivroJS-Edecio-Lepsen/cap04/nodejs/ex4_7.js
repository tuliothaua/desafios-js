//Add prompt-sync pack
const prompt = require("prompt-sync")()

//Reading
const people = Number(prompt("Nº People: "))
const fish = Number(prompt("Nº Fish: "))

let pay

//Process
if (fish <= people){
    pay = people * 20
} else {
    pay = (people * 20) + ((fish - people) * 12)
}

//Exit
console.log(`Pay R$: ${pay.toFixed(2)}`)