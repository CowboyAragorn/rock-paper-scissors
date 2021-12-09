let computerSelection
function computerPlay(){
    //Computer selects an integer between 1-3//
    computerSelection = Math.floor((Math.random()*3)+1);
    //assign the integers to strings and return//
    if (computerSelection === 1){
        computerSelection = "rock";
        console.log("The computer chose " + computerSelection)
        return computerSelection;
    }
    else if (computerSelection === 2) {
        computerSelection = "paper";
        console.log("The computer chose " + computerSelection)
        return computerSelection;
    }
    else {
        computerSelection = "scissors";
        console.log("The Computer Chose " + computerSelection)
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
//let computerPick
//let playerPick
//define variables that we will keep score in//
let compScore = 0
let playerScore = 0
let total = 0

function playRound() {
    //assign variables to computer and player functions and run them//
    //computerSelection = computerPlay();
    //playerSelection = playerPlay();
    
    //Tell player what each person selected//
    //console.log("You pick " + playerSelection);
    //console.log("Computer picks " + computerSelection);

    //compare strings to each other, display message if they won round, add points to scores//
    if (playerSelection === "rock" && computerSelection === "rock"){
        console.log( "Rock ties with Rock - try again");
        return
    }
    else if (playerSelection ==="rock" && computerSelection === "scissors") {;
        console.log("You win - Rock beats scissors!");
        return playerScore++
    }   
    else if (playerSelection ==="rock" && computerSelection === "paper"){
        
        console.log("You lose :( - Paper beats Rock");
        return compScore++
    }


    else if (playerSelection ==="scissors" && computerSelection === "rock"){
        
        console.log ("You lose :( - Rock beats Scissors");
        return compScore++
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        
        console.log("You win - Scissors beats Paper!");
        return playerScore++
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log ("Scissors ties with scissors");
    }   
    

    else if (playerSelection === "paper" && computerSelection === "rock") {
       
        console.log("You win - Paper beats Rock!");
        return playerScore++
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Paper ties with Paper");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        
        console.log("You lose :( - Scissors beats Paper");
        return compScore++
    }
}


//Keeps score and displays current score in spans//

function keepScore(){
    const playerScoreDisplay = document.querySelector("#playerScoreTally");
        //const playerP1 = document.createElement("p");
        //playerP1.innerText = (playerScore);
        playerScoreDisplay.innerText = playerScore;
    const compScoreDisplay = document.querySelector("#compScoreTally");
        compScoreDisplay.innerText = compScore;
   
  }

const winnerP1 = document.createElement("p")
const winnerP2 = document.createElement("p")
const winnerP3 = document.createElement("p")



function claimVictory(){
    const winnerDisplay = document.querySelector("#winner");
    if (playerScore >= 5 || compScore >= 5) {
        winnerP1.innerText = ("You Win! Do you feel better about yourself now?")
        winnerP2.innerText = ("FINAL: Player score: " + playerScore + " Computer score: " + compScore)
        winnerP3.innerText = ("-Click a weapon to reset and play again-");
        winnerDisplay.append(winnerP2);
        winnerDisplay.append(winnerP1);
        winnerDisplay.append(winnerP3);
        playerScore = [];
        compScore = [];
        return
    }
    else if (compScore >= 5){
        winnerP1.innerText = ("You lose! I beat you! I don't even have a brain!")
        winnerP2.innerText = ("Player score: " + playerScore + " Computer score: " + compScore)
        winnerP3.innerText = ("-Click a weapon to reset and play again-");
        winnerDisplay.append(winnerP2);
        winnerDisplay.append(winnerP1);
        winnerDisplay.append(winnerP3);
        playerScore = [];
        compScore = [];
        return
    }
    else{
        winnerP1.innerText = " ";
        winnerP2.innerText = " ";
        winnerP3.innerText = " ";
    }
    
}

//function toggleText() {
  //  let text = winnerP1
    //if (text.style.display === "none") {
//   text.style.display = "block";
    //} else {
    //    text.style.display = "none";
   // }
//}
 
//function cleanSlate(){
  //  winnerP1.style.display = "none";
//   }


let playerSelection

//Individual functions for buttons//

function choseRock() {
     playerSelection = 'rock'
        console.log("You chose " + playerSelection)
        return playerSelection
    }


function chosePaper() {
    playerSelection = 'paper'
    console.log("You chose " + playerSelection)
    return playerSelection
}


function choseScissors() {
    playerSelection = 'scissors'
    console.log("You chose " + playerSelection)
    return playerSelection
}

//Event Listeners//

const btnRock = document.querySelector('#btnRock');
    btnRock.addEventListener('click', choseRock);
    btnRock.addEventListener('click', function(){
        console.log(playerSelection)});
    btnRock.addEventListener('click', computerPlay);
    btnRock.addEventListener('click', function(){
        console.log(computerSelection)});
    btnRock.addEventListener('click', playRound);
    btnRock.addEventListener('click', keepScore);
    btnRock.addEventListener('click', claimVictory);
    

const btnPaper = document.querySelector('#btnPaper');
    btnPaper.addEventListener('click', chosePaper);
       btnPaper.addEventListener('click', function(){
        console.log(playerSelection)});
    btnPaper.addEventListener('click', computerPlay);
    btnPaper.addEventListener('click', function(){
        console.log(computerSelection)});
    btnPaper.addEventListener('click', playRound);
    btnPaper.addEventListener('click', keepScore);
    btnPaper.addEventListener('click', claimVictory);


const btnScissors = document.querySelector('#btnScissors');
    btnScissors.addEventListener('click', choseScissors);
      btnScissors.addEventListener('click', function(){
        console.log(playerSelection)});
    btnScissors.addEventListener('click', computerPlay);
    btnScissors.addEventListener('click', function(){
        console.log(computerSelection)});
    btnScissors.addEventListener('click', playRound);
    btnScissors.addEventListener('click', keepScore);
    btnScissors.addEventListener('click', claimVictory);


//Function that calls the rounds 5 times and displays scores. Delivers win vs loss message at end//
/*function game(){
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
*/

//call game//
//game();//]

