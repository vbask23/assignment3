let coinFlip = 0 
let randomNum
do {
    randomNum = Math.round(Math.random()) 
    if (randomNum === 0 ) {
        console.log("Heads")
    } 
    coinFlip++
}
while (randomNum !== 1) 
console.log("Tails")
console.log (`Heads came up ${coinFlip - 1} in a row `)
