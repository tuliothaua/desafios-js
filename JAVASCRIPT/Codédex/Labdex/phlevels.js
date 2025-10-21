// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : phlevels.js                              ║
// ╚════════════════════════════════════════════════════╝

// Codédex - pH Levels

//[VAR] :: Creating the Variables!
let ph = Math.floor(Math.random() * 14)

//[FUNC] :: Wheter Checker!
if (ph > 7){
  console.log("Basic")
} else if (ph < 7){
  console.log("Acidic")
} else {
  console.log("Neutral")
}

//[EXEC] :: Spittin on the screen!
console.log(`Ph level: ${ph}`)
