// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : fibonaccisequence.js                     ║
// ╚════════════════════════════════════════════════════╝

// Codédex - 🔢 Fibonacci Sequence

//[VAR] :: Creating the Variables!
let firstFib = 0
let secondFib = 1

//[FUNC] :: Creating the Process!
for(let i = 2; i < 10; i++){
 let nextFib = firstFib + secondFib
 console.log(nextFib)
 firstFib = secondFib
 secondFib = nextFib
}

//[EXEC] :: Creating the Exit!
console.log(firstFib)
console.log(secondFib)
