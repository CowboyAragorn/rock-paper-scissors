function computerPlay(){
    //Computer selects an integer between 1-3//
    let computerSelection = Math.floor((Math.random()*3)+1);
    if (computerSelection === 1){
        computerSelection = "rock";
        return computerSelection;
    }
    else if (computerSelection === 2) {
        computerSelection = "paper";
        return computerSelection;
    }
    else {
        computerSelection = "scissors";
        return computerSelection;
    }
    //Returns that integer//
}



function playerPlay(){
    //Player types in rock, paper, or scissors after message to select//
    let playerSelection = prompt("Choose your fighter: rock, paper, or scissors?");
    //Convert the input to lowercase//
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock"|| playerSelection === "paper"|| playerSelection === "scissors") {
    //Convert the strings to numbers with rock being 1, scissors being 2, and paper being 3//
       return playerSelection;
    }

    else {
        console.log("Invalid entry, type Rock, Paper, or Scissors")
        return playerPlay();
    }
}

let computerPick
let playerPick
let compScore = 0
let playerScore = 0


function playRound() {
    computerPick = computerPlay();
    playerPick = playerPlay();
    

    console.log("You pick " + playerPick);
    console.log("Computer picks " + computerPick);

    if (playerPick === "rock" && computerPick === "rock"){
        return "Rock ties with Rock - try again";
    
    }
    else if (playerPick ==="rock" && computerPick === "scissors") {
        playerScore++;
        return("You win - Rock beats scissors!");
    }   
    else if (playerPick ==="rock" && computerPick === "paper"){
        compScore++
        return ("You lose :( - Paper beats Rock");
    }


    else if (playerPick ==="scissors" && computerPick === "rock"){
        compScore++;
        return "You lose :( - Rock beats Scissors";
    }
    else if (playerPick === "scissors" && computerPick === "paper") {
        playerScore++;
        return "You win - Scissors beats Paper!";
    }
    else if (playerPick === "scissors" && computerPick === "scissors") {
        return "Scissors ties with scissors";
    }
    

    else if (playerPick === "paper" && computerPick === "rock") {
        playerScore++;
        return "You win - Paper beats Rock!";
    }
    else if (playerPick === "paper" && computerPick === "paper") {
        return "Paper ties with Paper";
    }
    else if (playerPick === "paper" && computerPick === "scissors") {
        compScore++;
        return "You lose :( - Scissors beats Paper";
    }
}

let playRoundVar

function game(){
    console.log(playRound());
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    console.log(playRound());
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + compScore);
    console.log(playRound());
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    console.log(playRound());
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    console.log(playRound());
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);

    if (playerScore > compScore){
        console.log( "Congratulations! You beat my stupid fucking ass");
    }
    else if (playerScore === compScore){
        console.log ( "You tied my stupid fucking ass");
    }
    else {
        console.log( "My stupid fucking ass beat you");
    }
}

game();