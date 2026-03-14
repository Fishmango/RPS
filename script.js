// Rock, Paper, Scissors Game

// Global Variables
let winner = null;

// 3-1+1=3 (Range of Num) +1 (incements from 0).. so 1,2,3 is the outcome.
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   if (compChoice ==  1) {
        compChoice = "rock";
   } else if (compChoice == 2) {
        compChoice = "paper";
   } else {
        compChoice = "scissors";
   }  
   return compChoice;
}

// Get the players choice as an integer and convert to string.
function getHumanChoice() {
   let answer = parseInt(prompt("Please select your choice for Rock, Paper, Scissors: 1) Rock, 2) Paper, 3) Scissors."));
   if (answer ==  1) {
        answer = "rock";
   } else if (answer == 2) {
        answer = "paper";
   } else if (answer == 3) {
        answer = "scissors";
   } else {
        console.log("Please choose a valid number 1-3.")
   }     
   return answer;
}

// Code for playing a single round.
function playRound(humanChoice, computerChoice) {
     if (humanChoice === "rock" && computerChoice === "paper") {
          console.log("You Lose! Paper covers Rock.");
          return winner = "computer";
     } else if (humanChoice === "rock" && computerChoice === "scissors") {
          console.log("You Win! Rock smashes Scissors.");
          return winner = "human";
     } else if (humanChoice === "paper" && computerChoice === "rock") {
          console.log("You Win! Paper covers Rock.");
          return winner = "human";
     } else if (humanChoice === "paper" && computerChoice === "scissors") {
          console.log("You Lose! Scissors cuts Paper.");
          return winner = "computer";
     } else if (humanChoice === "scissors" && computerChoice === "rock") {
          console.log("You Lose! Rock smashes Scissors.");
          return winner = "computer";
     } else if (humanChoice === "scissors" && computerChoice === "paper") {
          console.log("You Win! Scissors cuts Paper.");
          return winner = "human";
     } else {
          console.log("Tie, No Winners.")
     }
}


function playGame() { 
     let humanScore = 0;
     let computerScore = 0;

     while (humanScore < 5 && computerScore < 5) {
          const humanSelection = getHumanChoice();
          const computerSelection = getComputerChoice();
        
          playRound(humanSelection, computerSelection);

          // Score Handling
          if (winner === "human") {
               ++humanScore;
          } else if (winner === "computer") {
               ++computerScore;
          }
          console.log("Scores - Human:" + humanScore + " Computer:" + computerScore);
     }
          // Win Check
          if (humanScore === 5) {
               console.log("Congrats! You won the game!");
          } else {
               console.log("Computer wins the game. Better luck next time!");
          }
          console.log("Game Over!");
}


playGame();


