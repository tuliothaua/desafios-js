// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : rock-paper-scissors.js                   ║
// ╚════════════════════════════════════════════════════╝

// Codédex - Rock Paper Scissors

//[VAR] :: Creating the Variables!
const rock = 0
const paper = 1
const scissors = 2

let player = 1
let computer = Math.floor(Math.random() * 3)

//[FUNC] :: Verifying The Game!
function play(player,computer){
  if (player == rock && computer == scissors){
    return "The Player Won!"
  } else if (player == scissors && computer == paper){
    return "The Player Won!"
  } else if (player == paper && computer == rock){
    return "The Player Won!"
  } else if (player == computer){
    return "Draw, no one wins!"
  } else {
    return "The Computer Won!"
  }
}

//[FUNC] :: Verifying The Choice!
function choicePlayer(player){
  if(player == rock){
    return "Rock"
  } else if (player == paper){
    return "Paper"
  } else if (player == scissors){
    return "Scissors"
  } else {
    return "Unknown"
  }
}

function choiceComputer(computer){
    if(computer == rock){
    return "Rock"
  } else if (computer == paper){
    return "Paper"
  } else if (computer == scissors){
    return "Scissors"
  } else {
    return "Unknown"
  }
}

//[EXEC] :: Spittin on the screen!
console.log(`\nPlayer picked: ${choicePlayer(player)}`)
console.log(`\nComputer picked: ${choiceComputer(computer)}`)
console.log("\n" + play(player,computer))
