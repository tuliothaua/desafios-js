// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : dicedoubles.js                           ║
// ╚════════════════════════════════════════════════════╝

// Codédex - 🎲 Dice Doubles

//[VAR] :: Creating the Variables!
let die1 = Math.floor(Math.random() * 6) + 1
let die2 = Math.floor(Math.random() * 6) + 1
let numberOfRolls = 0

//[FUNC] :: Creating the Process!
while (die1 != die2){
  numberOfRolls++
  die1 = Math.floor(Math.random() * 6) + 1
  die2 = Math.floor(Math.random() * 6) + 1
  console.log(`Roll 1: ${die1}`)
  console.log(`Roll 2: ${die2}`)
}

//[EXEC] :: Creating the Exit!
console.log(`Number of rolls: ${numberOfRolls}`)
