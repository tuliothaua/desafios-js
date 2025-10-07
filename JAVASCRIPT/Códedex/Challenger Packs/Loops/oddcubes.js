// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : oddcubes.js                              ║
// ╚════════════════════════════════════════════════════╝

// Codédex - 🧊 Odd Cubes

//[VAR] :: Creating the Variables!
let total = 0
let limit = 7

//[FUNC] :: Creating the Process!
for(let i = 1; i <= limit; i++){
  total += i ** 3
}

//[EXEC] :: Creating the Exit!
console.log(total)
