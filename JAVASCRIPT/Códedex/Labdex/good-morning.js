// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : good-morning.js                          ║
// ╚════════════════════════════════════════════════════╝

// Codédex - Good Morning

//[VAR] :: Creating the Variables!
let hour = 7
let result;

//[FUNC] :: Verifying the Result!
if (hour < 12) {
  result = "Good morning 🌞"
} else if(hour > 12 && hour < 18) {
  result = "Good Evening!"
} else {
  result = "Good Night"
}

//[EXEC] :: Spittin on the screen!
console.log(result)
