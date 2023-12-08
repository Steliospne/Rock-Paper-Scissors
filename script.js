const btns = document.querySelectorAll("div.buttons");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const resetBtn = document.querySelector("#reset");
const winnerDisplay = document.querySelector(".winnerDisplay")
let scoreCountPlayer = 0;
let scoreCountComputer = 0;
playerScore.textContent = scoreCountPlayer;
computerScore.textContent = scoreCountComputer;

btns.forEach((button) => {
    button.addEventListener("click", getPlayerChoice);
});
resetBtn.addEventListener("click", () => location.reload());

function getComputerChoice() {
    let randomnChoice = Math.floor(getRandomArbitrary(0, 3));
    switch (randomnChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        winnerDisplay.textContent = "It's a Tie!"
        return console.log("Tie!");
    }

    if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You win!");
        playerScore.textContent = ++scoreCountPlayer;
        winnerDisplay.textContent = "You win!"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win!");
        playerScore.textContent = ++scoreCountPlayer;
        winnerDisplay.textContent = "You win!"
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You win!");
        playerScore.textContent = ++scoreCountPlayer;
        winnerDisplay.textContent = "You win!"
    } else {
        console.log("You loose!");
        computerScore.textContent = ++scoreCountComputer;
        winnerDisplay.textContent = "Computer wins!"
    }
    checkWinner();
}

function getPlayerChoice(e) {
    playerChoice = e.target.textContent.toLowerCase();
    console.log(playerChoice);
    playRound(playerChoice, getComputerChoice());
}

function checkWinner() {
    if (scoreCountPlayer == 3) {
        console.log("Player Wins!");
        winnerDisplay.textContent = "You have won!"
        btns.forEach((button) => {
            button.removeEventListener("click", getPlayerChoice);
        });
    }
    if (scoreCountComputer == 3) {
        console.log("Computer Wins!");
        winnerDisplay.textContent = "Computer has won!"
        btns.forEach((button) => {
            button.removeEventListener("click", getPlayerChoice);
        });
        // break;
    }
}