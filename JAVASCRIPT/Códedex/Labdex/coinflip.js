// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : coinflip.js                              ║
// ╚════════════════════════════════════════════════════╝

// Codédex - Coin Flip

//[VAR] :: Creating the Variables!
let num = Math.random();
let result;

//[FUNC] :: Verifying the Result!
if (num > 0.5) {
  result = "Heads"
} else {
  result = "Tails"
}

//[EXEC] :: Spittin on the screen!
console.log(result)
