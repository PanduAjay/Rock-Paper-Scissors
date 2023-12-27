let resultEl = document.getElementById("result");
let playerEl = document.getElementById("player");
let computerEl = document.getElementById("computer");
const game = ["Rock", "Paper", "Scissors"];

const start = (playerChoice) => {
    let computerChoice = game[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
        playerEl.textContent = playerChoice;
        computerEl.textContent = computerChoice;
        resultEl.textContent = "Draw";
        resultEl.style.color = "orange";
    } else {
        switch (playerChoice) {
            case "Rock":
                playerEl.textContent = playerChoice;
                computerEl.textContent = computerChoice;
                resultEl.textContent = (computerChoice === "Scissors") ? "You Win!" : "You Lose! Try Again...";
                resultEl.style.color = (computerChoice === "Scissors") ? "green" : "red";
                break;
            case "Paper":
                playerEl.textContent = playerChoice;
                computerEl.textContent = computerChoice;
                resultEl.textContent = (computerChoice === "Scissors") ? "You Lose! Try Again..." : "You Win!";
                resultEl.style.color = (computerChoice === "Scissors") ? "red" : "green";
                break;
            case "Scissors":
                playerEl.textContent = playerChoice;
                computerEl.textContent = computerChoice;
                resultEl.textContent = (computerChoice === "Paper") ? "You Win!" : "You Lose! Try Again..";
                resultEl.style.color = (computerChoice === "Scissors") ? "green" : "red";
                break;
        }
    }
};
