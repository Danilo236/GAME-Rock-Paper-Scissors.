console.log("ROCK PAPER SCISSORS");
console.log("5 ROUND GAME");

function getComputerChoice() {
  const signs = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  let cpuChoice = signs[randomIndex];

  return cpuChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  ) {
    return "Your choice is incorrect! ";
  }

  if (playerSelection == computerSelection) {
    return "It is a tie";
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors";
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beats Paper";
    }
  }
}

function playGame() {
  playerWin = 0;
  cpuWin = 0;

  for (i = 0; i < 5; i++) {
    roundText = playRound(prompt("Input your choice"), getComputerChoice());

    if (roundText.includes("Your choice is incorrect! ")) i--;
    else if (roundText.includes("You Win!")) playerWin++;
    else if (roundText.includes("You Lose!")) cpuWin++;

    console.log(roundText);
  }

  if (playerWin > cpuWin) console.log("You are the winner! ");
  else if (playerWin < cpuWin) console.log("You are the loser! ");
  else console.log("It's a draw! ");
}

playGame();
