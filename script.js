const options = document.querySelectorAll(".option");
let winner = document.getElementById("score");
console.log(options);
let FirstPlayer = false;
let SecondPlayer = false;
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (FirstPlayer === false) {
      option.style.backgroundColor = "#00FF00";
      option.textContent = "X";
      FirstPlayer = true;
      SecondPlayer = false;
      option.style.pointerEvents = "none";
      if (
        options[0].textContent === "X" &&
        options[1].textContent === "X" &&
        options[2].textContent === "X"
      ) {
        winner.textContent = "Player with X Win";
      } else if (
        options[0].textContent === "X" &&
        options[3].textContent === "X" &&
        options[6].textContent === "X"
      ) {
        winner.textContent = "Player with X Win";
      } else if (
        options[0].textContent === "X" &&
        options[4].textContent === "X" &&
        options[8].textContent === "X"
      ) {
        winner.textContent = "Player with X Win";
      } else if (
        options[6].textContent === "X" &&
        options[4].textContent === "X" &&
        options[2].textContent === "X"
      ) {
        winner.textContent = "Player with X Win";
      } else if (
        options[1].textContent === "X" &&
        options[4].textContent === "X" &&
        options[7].textContent === "X"
      ) {
        winner.textContent = "Player with X Win";
      } else if (
        options[3].textContent === "X" &&
        options[4].textContent === "X" &&
        options[5].textContent === "X"
      ) {
        winner.textContent = "Player with X Win";
      }
    } else if (FirstPlayer == true) {
      option.style.backgroundColor = "#00FF00";
      option.textContent = "O";
      SecondPlayer = true;
      FirstPlayer = false;
      option.style.pointerEvents = "none";
      if (
        options[0].textContent === "O" &&
        options[1].textContent === "O" &&
        options[2].textContent === "O"
      ) {
        winner.textContent = "Player with O Win";
      } else if (
        options[0].textContent === "O" &&
        options[3].textContent === "O" &&
        options[6].textContent === "O"
      ) {
        winner.textContent = "Player with X Win";
      } else if (
        options[0].textContent === "O" &&
        options[4].textContent === "O" &&
        options[8].textContent === "O"
      ) {
        winner.textContent = "Player with O Win";
      } else if (
        options[6].textContent === "O" &&
        options[4].textContent === "O" &&
        options[2].textContent === "O"
      ) {
        winner.textContent = "Player with O Win";
      } else if (
        options[1].textContent === "O" &&
        options[4].textContent === "O" &&
        options[7].textContent === "O"
      ) {
        winner.textContent = "Player with O Win";
      } else if (
        options[3].textContent === "O" &&
        options[4].textContent === "O" &&
        options[5].textContent === "O"
      ) {
        winner.textContent = "Player with O Win";
      }
    }
  });
});

