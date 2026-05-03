//Add prompt sync pack
const prompt = require("prompt-sync")()

//Reading the data
const number = Number(prompt("Number (Hundred): "))

//Processing
if (number < 100 || number >= 1000){
    console.log("#Hey, the number must be a hundred")
    return
}

const num1 = Math.floor(number / 100)
const rest = number % 100
const num2 = Math.floor(rest / 10)
const num3 = rest % 10

//Exit
console.log(`Inverted: ${num3}${num2}${num1}`)