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
        scoreWindow.innerHTML = humanScore + ' : ' + computerScore;
        return(humanScore, computerScore);
    } else {
        computerScore += 1
        return (humanScore, computerScore);
    }
    
}

const chooseRock = document.querySelector('.rock');
const choosePaper = document.querySelector('.paper');
const chooseScissors = document.querySelector('.scissors');
let scoreWindow = document.querySelector('span');

let humanScore = 0;
let computerScore = 0;

scoreWindow.innerHTML = humanScore + ' : ' + computerScore;

chooseRock.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});

choosePaper.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});

chooseScissors.addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
});