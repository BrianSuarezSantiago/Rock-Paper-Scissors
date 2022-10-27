let computerChoice;
let playerScore = 0, computerScore = 0;

/**
 * Randomly generates a number between 0 and 2 representing 
 * Rock, Paper, Scissors respectively.
 * 
 * @param min - The minimum number that the computer can choose.
 * @param max - The maximum number that can be generated.
 */
function getComputerChoice(min, max) {
    computerChoice = Math.floor(Math.random() * (max + min + 1) + min);

    if(computerChoice == 0) {
        computerChoice = "Rock";
    } else if(computerChoice == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
}

/**
 * Plays a single round of the game and print the winner ofthe round.
 */
function playRound() {
    getComputerChoice(0, 2);

    let userChoice = String(prompt("Choose between Rock-Paper-Scissors"));

    // Verifies that the user enters a valid option
    const regex = /^[a-zA-Z]+$/;

    if(!userChoice.match(regex)) {
        alert("❌ Please, select a valid choice ❌");
        exit();    // Stop the execution of the game
    }

    // Treats the user's input to convert it to lowercase regardless of how it was entered and removes any spaces that were added
    playerSelection =  userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLocaleLowerCase();
    computerSelection = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLocaleLowerCase();

    if(playerSelection === computerSelection) {
        alert(`You select "${playerSelection}" and the computer selects "${computerSelection}" \n TIE!!`);
    } else if((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        alert(`You select "${playerSelection}" and the computer selects "${computerSelection}" \n YOU WON!!`);
        playerScore++;
    } else if((playerSelection === "Paper") && (computerSelection === "Rock")) {
        alert(`You select "${playerSelection}" and the computer selects "${computerSelection}" \n YOU WON!!`);
        playerScore++;
    } else if((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        alert(`You select "${playerSelection}" and the computer selects "${computerSelection}" \n YOU WON!!`);
        playerScore++;
    } else {
        alert(`You select "${playerSelection}" and the computer selects "${computerSelection}" \n YOU LOSE!!`);
        computerScore++;
    }
}

// Check the winner of the 5 played rounds
const checkWinner = () => {
    if(playerScore === computerScore) {
        alert("Tie!! 🔖");
    } else if(playerScore > computerScore) {
        alert("You win!! 🥳");
    } else {
        alert("Computer win!! 😔");
    }
};

// Plays 5 rounds of the game and declares the winner
const game = () => {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
    checkWinner();
};

game();    // Game initialization