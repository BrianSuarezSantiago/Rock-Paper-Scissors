let options = ["ROCK", "PAPER", "SCISSORS"];

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const resultText = document.getElementById("result-text");
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");
const startBtn = document.getElementById("start_game");
const usertext = document.getElementById("user-text");
const computertext = document.getElementById("computer-text");

let userScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", () => {
    playRound("ROCK");
});

paperBtn.addEventListener("click", () => {
    playRound("PAPER");
});

scissorBtn.addEventListener("click", () => {
    playRound("SCISSORS");
});

startBtn.addEventListener("click", () => {
    start_game();
});

function start_game() {
    userScore = 0;
    computerScore = 0;

    rockBtn.style.visibility = 'visible';
    paperBtn.style.visibility = 'visible';
    scissorBtn.style.visibility = 'visible';
    startBtn.style.visibility = 'hidden';

    usertext.innerHTML = "Welcome!";
    usertext.innerHTML = "User: " + userScore;
    computertext.innerHTML = "Computer: " + computerScore;
}

function getComputerChoice(options) {
	return options[Math.floor(Math.random()*3)];
}

function roundResult(computerChoice,userChoice){
    let computer_win = false;
    let user_win = false;

    if(userChoice == computerChoice) {
        resultText.innerHTML = "Tie";
    } else if(userChoice == "ROCK") {
        if(computerChoice == "PAPER") {
            computer_win = true;  
        } else if(computerChoice == "SCISSORS") {
            user_win=true;
        }
    } else if(userChoice == "PAPER") {
        if(computerChoice == "SCISSORS") {
            computer_win = true;
        } else if(computerChoice == "ROCK") {
            user_win = true;
        }
    } else if(userChoice == "SCISSORS") {
        if(computerChoice == "ROCK") {
            computer_win = true;
        } else if(computerChoice == "PAPER") {
            user_win = true;
        }
    }
   
    if(computer_win) {
        computerScore += 1;
        resultText.innerHTML = "You loose";
        computertext.innerHTML = "Computer: " + computerScore; 
    } else if(user_win) {
        userScore += 1;
        resultText.innerHTML = "You win";
        usertext.innerHTML = "User: " + userScore;
    }
}

function playRound(userChoice) {
    computerChoice = getComputerChoice(options);
     
    switch(userChoice) {
        case "ROCK":
            userImg.src = "./assets/images/Rock.png";
        break;

        case "PAPER":
            userImg.src = "./assets/images/Paper.png";
        break;

        case "SCISSORS":
            userImg.src = "./assets/images/Scissors.png";
        break;
    }

    switch(computerChoice) {
        case "ROCK":
            computerImg.src = "./assets/images/Rock.png";
        break;

        case "PAPER":
            computerImg.src = "./assets/images/Paper.png";
        break;

        case "SCISSORS":
            computerImg.src = "./assets/images/Scissors.png";
        break;
    }

    if(userScore < 3 && computerScore < 3) {
        roundResult(computerChoice, userChoice);
    } else {
        if(userScore === 3) {
            resultText.innerHTML = "Winner: User";
        } else {
            resultText.innerHTML = "Winner: Computer";
        }

        startBtn.style.visibility = 'visible';
        rockBtn.style.visibility = 'hidden';
        paperBtn.style.visibility = 'hidden';
        scissorBtn.style.visibility = 'hidden';   
    }   
}