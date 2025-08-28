/* TÚLIO THAUÃ DUTRA >> */
// HIGHER OR LOWER?
let userNumber = [7,2,10,17,22]
let lowerNumber = 99999999999999
let higherNumber = 0

//Process
for(i=0;i < userNumber[i]; i++){
  if(userNumber[i] > higherNumber){
    higherNumber = userNumber[i]
  } else if (lowerNumber > userNumber[i]){
    lowerNumber = userNumber[i]
  }
}

//Creating the Exit
console.log(`The lower number is: ${lowerNumber} `)
console.log(`The higher number is: ${higherNumber}`)
console.log(`Chosen Numbers: ${userNumber}`)
