const ALL_OPTIONS = ["Rock", "Paper", "Scissors"];
const MAX_GAMES = 5;
let playerWins = 0;
let computerWins = 0;

// Computer picks a random option
const computerPlay = function () {
  return ALL_OPTIONS[Math.floor(Math.random() * 3)].toLowerCase();
};

const playerSelection = function () {
  return prompt("Choose your weapon - rock, paper, or scissors:").toLowerCase();
};

// Compare selections return winner string
const playRound = function (computer, player) {
  // invalid user entry
  if (player !== "rock" && player !== "scissors" && player !== "paper") {
    return `Player has made an invalid selection: ${player}`;
  }
  // TIE
  else if (computer === player) {
    return `It's a TIE, both picked ${computer}`;
  }
  // Computer wins
  else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper")
  ) {
    computerWins++;
    return `Computer wins! ${computer} beats ${player}`;
  }
  // Player wins
  else {
    playerWins++;
    return `Player wins! ${player} beats ${computer}`;
  }
};

// console.log(playRound(computerPlay(), playerSelection()));

// play maxGames rounds and output winner
const game = function () {
  for (let i = 1; i <= MAX_GAMES; i++) {
    console.log(playRound(computerPlay(), playerSelection()));
  }
  return `${computerWins > playerWins ? "Computer" : "Player"} wins ${
    computerWins > playerWins ? computerWins : playerWins
  } to ${computerWins > playerWins ? playerWins : computerWins}`;
};

// console.log(game());
