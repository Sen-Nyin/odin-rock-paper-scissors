const ALL_OPTIONS = ["Rock", "Paper", "Scissors"];
const MAX_GAMES = 5;
let playerWins = 0;
let computerWins = 0;
let playerSelection;
let gameRound = 0;

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const roundNumber = document.querySelector(".round-number");
const roundResult = document.querySelector(".round-result");
const buttons = document.querySelectorAll(".btn");
const playerBox = document.querySelector(".contender-1");
const computerBox = document.querySelector(".contender-2");
const modal = document.querySelector(".modal");
const modalWinner = document.querySelector(".modal__winner-text");
const modalScore = document.querySelector(".modal__score-text");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelector(".modal__btn");
// const btnRock = document.querySelector("#rock");

// Computer picks a random option
const computerPlay = function () {
  return ALL_OPTIONS[Math.floor(Math.random() * 3)];
};

function reset() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  roundNumber.textContent = "Make your selection to start the game!";
  roundResult.textContent = "Awaiting Game Start";
  playerBox.classList.remove("winner");
  playerBox.classList.remove("tie");
  computerBox.classList.remove("winner");
  computerBox.classList.remove("tie");
  playerWins = 0;
  computerWins = 0;
  gameRound = 0;
}

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    playerSelection = this.textContent;
    console.log(playerSelection);
    // console.log(playRound(computerPlay(), playerSelection));
    game(playerSelection);
  })
);

modalButton.addEventListener("click", () => {
  reset();
});

overlay.addEventListener("click", () => {
  reset();
});

const playRound = function (computer, player) {
  gameRound++;
  roundNumber.textContent = `Round Number ${gameRound}`;
  // invalid user entry
  if (player !== "Rock" && player !== "Scissors" && player !== "Paper") {
    return `Player has made an invalid selection: ${player}`;
  }
  // TIE
  else if (computer === player) {
    playerBox.classList.add("tie");
    computerBox.classList.add("tie");
    roundResult.textContent = `It's a TIE, both picked ${computer}`;
    return `It's a TIE, both picked ${computer}`;
  }
  // Computer wins
  else if (
    (computer === "Rock" && player === "Scissors") ||
    (computer === "Paper" && player === "Rock") ||
    (computer === "Scissors" && player === "Paper")
  ) {
    computerWins++;
    playerBox.classList.remove("winner");
    computerBox.classList.add("winner");
    playerBox.classList.remove("tie");
    computerBox.classList.remove("tie");
    computerScore.textContent = computerWins;
    roundResult.textContent = `Computer wins! ${computer} beats ${player}`;

    return `Computer wins! ${computer} beats ${player}`;
  }
  // Player wins
  else {
    playerWins++;
    playerBox.classList.add("winner");
    computerBox.classList.remove("winner");
    computerBox.classList.remove("tie");
    playerBox.classList.remove("tie");
    playerScore.textContent = playerWins;
    roundResult.textContent = `Player wins! ${player} beats ${computer}`;
    return `Player wins! ${player} beats ${computer}`;
  }
};

const setModalText = () => {
  modalScore.textContent = `Player ${playerWins} vs ${computerWins} Computer`;
  if (computerWins === playerWins) {
    modalWinner.textContent = `It's a TIE!`;
  } else {
    modalWinner.textContent = `${
      computerWins > playerWins ? "You Lost!" : "You Won!"
    }`;
  }
};

// console.log(playRound(computerPlay(), playerSelection()));

// play maxGames rounds and output winner
// const game = function () {
//   for (let i = 1; i <= MAX_GAMES; i++) {
//     console.log(playRound(computerPlay(), playerSelection()));
//   }
//   return `${computerWins > playerWins ? "Computer" : "Player"} wins ${
//     computerWins > playerWins ? computerWins : playerWins
//   } to ${computerWins > playerWins ? playerWins : computerWins}`;
// }

// console.log(game());

const game = function (playerSelection) {
  if (gameRound < 4) {
    console.log(playRound(computerPlay(), playerSelection));
  } else {
    console.log(playRound(computerPlay(), playerSelection));
    setModalText();
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
};
