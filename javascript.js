function computerPlay(){
    //Computer selects an integer between 1-3//
    let computerSelection = Math.floor((Math.random()*3)+1);
    //assign the integers to strings and return//
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

}



function playerPlay(){
    //Player types in rock, paper, or scissors after message to select//
    let playerSelection = prompt("Choose your fighter: rock, paper, or scissors?");
    //Convert the input to lowercase//
    playerSelection = playerSelection.toLowerCase();
    // if the user selects exactly one of the three then return the value//
    if (playerSelection === "rock"|| playerSelection === "paper"|| playerSelection === "scissors") {
       return playerSelection;
    }
    //otherwise end the function and run it again//
    else {
        console.log("Invalid entry, type Rock, Paper, or Scissors")
        return playerPlay();
    }
}

//Define variables that we will assign the computer values to//
let computerPick
let playerPick
//define variables that we will keep score in//
let compScore = 0
let playerScore = 0


function playRound() {
    //assign variables to computer and player functions and run them//
    computerPick = computerPlay();
    playerPick = playerPlay();
    
    //Tell player what each person selected//
    console.log("You pick " + playerPick);
    console.log("Computer picks " + computerPick);

    //compare strings to each other, display message if they won round, add points to scores//
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

//Function that calls the rounds 5 times and displays scores. Delivers win vs loss message at end//
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

//call game//
game();