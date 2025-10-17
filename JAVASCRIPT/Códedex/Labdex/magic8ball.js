// ╔════════════════════════════════════════════════════╗
// ║  AUTHOR : Túlio Thauã Dutra                        ║
// ║  HANDLE : root@thaua                               ║
// ║  STATUS : javascript Learning Mode >> ACTIVE       ║
// ║  FILE   : magic8ball.js                            ║
// ╚════════════════════════════════════════════════════╝

// Codédex - Magic 8 Ball

//[VAR] :: Creating the Variables!
let magic8ball = Math.floor(Math.random() * 9)
let question = "Is Codédex better than Udemy yet?"
let answer;

//[FUNC] :: Verifying the Exit!
  if (magic8ball == 0){
  answer = "Very doubtful."
} else if (magic8ball == 1){
  answer = "Yes - definitely." 
} else if (magic8ball == 2){
  answer = "It is decidedly so."
} else if (magic8ball == 3){
  answer = "Without a doubt."
} else if (magic8ball == 4){
  answer = "Reply hazy, try again."
} else if (magic8ball == 5){
  answer = "Ask again later."
} else if (magic8ball == 6){
  answer = "Better not tell you now."
} else if (magic8ball == 7){
  answer = "My sources say no."
} else if (magic8ball == 8){
  answer = "Outlook not so good."
}

//[EXEC] :: Spittin on the screen!
console.log(`Question: ${question}\nMagic 8 ball: ${answer}`)
