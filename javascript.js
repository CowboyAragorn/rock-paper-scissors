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
let roundResult

function playRound() {
    //assign variables to computer and player functions and run them//
    //computerSelection = computerPlay();
    //playerSelection = playerPlay();
    
    //Tell player what each person selected//
    //console.log("You pick " + playerSelection);
    //console.log("Computer picks " + computerSelection);

    //compare strings to each other, display message if they won round, add points to scores//
    //Would rewrite roundResult into something that the variables would auto-plug into but
    //already have the sentences written from previous iteration

("player " + playerSelection + " BEATS computer " + computerSelection);

    if (playerSelection === "rock" && computerSelection === "rock"){
        roundResult = ("player " + playerSelection + " TIES computer " + computerSelection);
        
        return
    }
    else if (playerSelection ==="rock" && computerSelection === "scissors") {;
        roundResult = ("player " + playerSelection + "          BEATS computer      " + computerSelection);
        return playerScore++
    }   
    else if (playerSelection ==="rock" && computerSelection === "paper"){
        
        roundResult = ("player " + playerSelection + " LOSES to computer " + computerSelection);
        return compScore++
    }


    else if (playerSelection ==="scissors" && computerSelection === "rock"){
        
        roundResult = "Rock beats Scissors";
        return compScore++
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        
        roundResult ="Scissors beats Paper!";
        return playerScore++
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        roundResult = "Scissors ties with scissors";
    }   
    

    else if (playerSelection === "paper" && computerSelection === "rock") {
       
        roundResult = "Paper beats Rock!";
        return playerScore++
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        roundResult = "Paper ties with Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        
        roundResult = "Scissors beats Paper";
        return compScore++
    }
}

const playerSelectionDisplay = document.querySelector("#playerSelection");
const compSelectionDisplay = document.querySelector("#compSelection");



function resultRound(){
    playerSelectionUpper = playerSelection.toUpperCase();
    compSelectionUpper = computerSelection.toUpperCase();
    playerSelectionDisplay.innerText = (playerSelectionUpper) ;
    compSelectionDisplay.innerText = (compSelectionUpper);
}



//Keeps score and displays current score in spans//

function keepScore(){
    const playerScoreDisplay = document.querySelector("#playerScoreTally");
        //const playerP1 = document.createElement("p");
        //playerP1.innerText = (playerScore);
    const compScoreDisplay = document.querySelector("#compScoreTally");
     
    if(playerScore === 0 && compScore === 0){
        playerScoreDisplay.innerText = "Player Score: " + "0";
        compScoreDisplay.innerText = "Computer Score: " + "0";
    }

    else if (compScore === 0){
        playerScoreDisplay.innerText = "Player Score: " + playerScore;
        compScoreDisplay.innerText = "Computer Score: " + "0"
    }
     else if (playerScore === 0){
        playerScoreDisplay.innerText = "Player Score: " + "0";
        compScoreDisplay.innerText = "Computer Score: " + compScore
    }

    else {
        playerScoreDisplay.innerText = "Player Score: " + playerScore;
        compScoreDisplay.innerText = "Computer Score: " + compScore;
    }

  }

const winnerP1 = document.createElement("p");
  winnerP1.id = "winnerP1";
//const winnerP2 = document.createElement("p");
  //winnerP2.id = "winnerP2";
const winnerP3 = document.createElement("p");
  winnerP3.id = "winnerP3";



function claimVictory(){
    const winnerDisplay = document.querySelector("#winner");
    if (playerScore >= 5 || compScore >= 5) {
        winnerP1.innerText = ("You Win! Do you feel better about yourself now?")
        //winnerP2.innerText = ("FINAL: Player score: " + playerScore + " Computer score: " + compScore)
        winnerP3.innerText = ("-Click an Option to Play Again-");
        winnerDisplay.append(winnerP1);
        //winnerDisplay.append(winnerP2);
        winnerDisplay.append(winnerP3);
        playerScore = 0;
        compScore = 0;
        return
    }
    else if (compScore >= 5){
        winnerP1.innerText = ("You lose! I beat you! I don't even have a brain!")
        //winnerP2.innerText = ("Player score: " + playerScore + " Computer score: " + compScore)
        winnerP3.innerText = ("-Click an Option to Play Again-");
        winnerDisplay.append(winnerP1);
       // winnerDisplay.append(winnerP2);
        winnerDisplay.append(winnerP3);
        playerScore = 0;
        compScore = 0;
        return
    }
    else{
        winnerDisplay.removeChild(winnerP1);
        //winnerP1.innerText = " ";
       // winnerP2.innerText = " ";
        winnerDisplay.removeChild(winnerP3);
        //winnerP3.innerText = " ";
    }
    
}

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
    btnRock.addEventListener('click', resultRound);
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
    btnPaper.addEventListener('click', resultRound);
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
    btnScissors.addEventListener('click', resultRound);
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

