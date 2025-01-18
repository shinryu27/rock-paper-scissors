function getComputerChoice() {
    let num = Math.floor(Math.random()*3)
    if(num === 0){
        const ComputerChoice = "rock";
        return ComputerChoice
    } else if(num === 1) {
        const ComputerChoice = "paper";
        return ComputerChoice
    } else if (num === 2){
        const ComputerChoice = "scissors";
        return ComputerChoice
    }
}

function getHumanChoice() {
    let HumanChoice = prompt("Choose between rock, paper, and scissors: ")
    return HumanChoice
}

let humanScore = 0;
let computerScore = 0;

function playgame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        let status = " "
    
        if(humanChoice === computerChoice){
            status = "draw"
        } else if((humanChoice === "rock" && computerChoice === "paper")||(humanChoice === "paper") && computerChoice === "rock") {
            status = "paper"
        } else if((humanChoice === "rock" && computerChoice === "scissors")||(humanChoice === "scissors") && computerChoice === "rock") {
            status = "rock"
        } else if((humanChoice === "scissors" && computerChoice === "paper")||(humanChoice === "paper") && computerChoice === "scissors") {
            status = "scissors"
        } 
    
        if(status === "draw") {
            return console.log("<== It's a tie! ==>")
        } else if(humanChoice === status) {
            humanScore += 1
            return console.log("You won! " + humanChoice + " beats " + computerChoice)
        } else {
            computerScore += 1
            return console.log("You lose! " + computerChoice + " beats " + humanChoice)
        }
    }

for (let i = 1; i <= 5 ; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
    }
if (humanScore > computerScore) {
    return console.log("Congratulations! You won!")
} else if(humanScore < computerScore) {
    return console.log("You lose:(")
} else {
    return console.log("It's a tie! Well played!")
}

}

let play = "Y"

while (play === "Y") {
    playgame();
    play = prompt("Do you want to play again? Y/N")
    play = play.toUpperCase()
}