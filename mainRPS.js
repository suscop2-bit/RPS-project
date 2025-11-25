let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function pickComputermove() {
  let computerMove = "";

  const random = Math.random();

  if (random >= 0 && random < 1 / 3) {
    computerMove = "rock";
  } else if (random >= 1 / 3 && random < 2 / 3) {
    computerMove = "paper";
  } else if (random >= 2 / 3 && random < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputermove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "you loose";
    } else if (computerMove === "scissors") {
      result = "you win";
    }

    if (result === "you win") {
      score.wins++;
    } else if (result === "you loose") {
      score.losses++;
    } else if (result === "tie") {
      score.ties++;
    }

    alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses ${score.losses}, ties: ${score.ties}`);
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win";
    } else if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissors") {
      result = "you loose";
    }

    if (result === "you win") {
      score.wins++;
    } else if (result === "you loose") {
      score.losses++;
    } else if (result === "tie") {
      score.ties++;
    }
    console.log(score);

    alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses ${score.losses}, ties: ${score.ties}`);
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you loose";
    } else if (computerMove === "paper") {
      result = "you win";
    } else if (computerMove === "scissors") {
      result = "tie";
    }

    if (result === "you win") {
      score.wins++;
    } else if (result === "you loose") {
      score.losses++;
    } else if (result === "tie") {
      score.ties++;
    }
    console.log(score);

    localStorage.setItem("score", JSON.stringify(score));

    alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses ${score.losses}, ties: ${score.ties}`);
  }
}