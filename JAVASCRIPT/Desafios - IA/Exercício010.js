// Try to hit the right number
/* Túlio Thauã Dutra >> */
let userNumber = 77

//Process
let randomNumber = (Math.floor(Math.random() * 101));

//Tips
if(userNumber == randomNumber){
  console.log("You got the right number!")
} else if (userNumber > randomNumber){
  console.log("Oh! hit a lower number!")
} else if (userNumber < randomNumber){
  console.log("Oh! hit a higher number!")
}
