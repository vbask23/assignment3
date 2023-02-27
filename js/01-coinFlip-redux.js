let coinFlip = parseInt(prompt("Enter a number: "))
for(i = 1; i <= coinFlip; i++) {
    randomNum = Math.round(Math.random())   
    if (randomNum === 1) {
        console.log("Tails")
    }
    else {
        console.log("Heads")
    }
}