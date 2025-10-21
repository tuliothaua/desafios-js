// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : swagraflle.js                            ║
// ╚════════════════════════════════════════════════════╝

// Codédex - Swag Raffle 🎟️

//[VAR] :: Creating the Variables!
let count = 0
const targetNumber = Math.floor(Math.random() * 100)

//[FUNC] :: Creating the Process!
while(count < 10){
  let drawNumber = Math.floor(Math.random() * 100)
    if(drawNumber == targetNumber){
      count++
      console.log("Match")
    } else {
      console.log("No Match")
    }
}

//[EXEC] :: Creating the Exit!
console.log(`The number ${targetNumber} was found 10 times.`)
