var availableOptions = ["rock", "paper", "scissors"];
var playerWins = "Player 1 wins!! 😁";
var computerWins = "Computer wins!! 😭";
var draw = "Draw!! 🙄";

function getRandomOption() {
  return availableOptions[Math.floor(Math.random() * 3)];
}

function isPlayerWinner(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return true;
  }
  return false;
}

for (i = 0; i < document.querySelectorAll(".option").length; i++) {
  document.querySelectorAll(".option")[i].addEventListener("click", function () {
    var playerOption = this.id;
    var srcPlayer = "./images/" + playerOption + ".png";
    document.querySelector("#player").setAttribute("src", srcPlayer);

    var computerOption = getRandomOption();
    var srcComputer = "./images/" + computerOption + ".png";
    document.querySelector("#computer").setAttribute("src", srcComputer);

    if (playerOption === computerOption) {
      document.querySelector(".winner").innerHTML = draw;
    } else if (isPlayerWinner(playerOption, computerOption)) {
      document.querySelector(".winner").innerHTML = playerWins;
    } else {
      document.querySelector(".winner").innerHTML = computerWins;
    }
  });
}
