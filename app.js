const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
let endGame = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK} ,${PAPER} or ${SCISSOR}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`invalid choice! we chose ROCK for you .`);
    document.getElementById("player").innerHTML = ROCK;
    return ROCK;
  }
  document.getElementById("player").innerHTML = selection;
  return selection;
};

const getCamputerChoice = () => {
  const cpuSelections = [ROCK, PAPER, SCISSOR];
  const cpuselect =
    cpuSelections[Math.floor(Math.random() * cpuSelections.length)];
  document.getElementById("cpu").textContent = cpuselect;
  return cpuselect;
};

const getWinner = (cChoise, pChoice) => {
  (cChoise === PAPER && pChoice === ROCK) ||
  (cChoise === ROCK && pChoice === SCISSOR) ||
  (cChoise === SCISSOR && pChoice === PAPER)
    ? (document.getElementById("winner").innerHTML = "winner is camputer")
    : cChoise === pChoice
    ? (document.getElementById("winner").innerHTML = "it's a draw")
    : (document.getElementById("winner").innerHTML = "winner is player");

  //   if (
  //     (cChoise === PAPER && pChoice === ROCK) ||
  //     (cChoise === ROCK && pChoice === SCISSOR) ||
  //     (cChoise === SCISSOR && pChoice === PAPER)
  //   ) {
  //     console.log("the winner is camputer");
  //     document.getElementById("winner").innerHTML = "winner is camputer";
  //   } else if (cChoise === pChoice) {
  //     console.log("it is a draw");
  //     document.getElementById("winner").innerHTML = "it's a draw";
  //   } else {
  //     console.log("the winner is player");
  //     document.getElementById("winner").innerHTML = "winner is player";
  //   }
};

startGameBtn.addEventListener("click", () => {
  if (endGame) {
    //for lounch the game for time to time
    return;
  }
  endGame = true;
  console.log("game started !");
  // console.log(getPlayerChoice());
  // console.log(getCamputerChoice());
  const playerSelection = getPlayerChoice(); //we can store function in const and use it
  const camputerSelection = getCamputerChoice();
  const theWinner = getWinner(camputerSelection, playerSelection);
  console.log(theWinner);
  endGame = false;
});

console.log(
  "____________________________________________________________________"
);

//not releated in game
const SUM = "SUM";
const SUB = "SUBTRACT";
const combine = (combineResult, oprator, ...[numbers]) => {
  const validateNumber = (number) => {
    return !isNaN(number) ? number : 0;
  };

  let sum = 0;
  for (const num of numbers) {
    if (oprator === SUM) {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }

  combineResult(sum);
};

// const substract = function (substractReslut, ...numbers) {
//     let sub = 0;
//     for (const num of numbers) {
//         sub -= num;
//     }
//     substractReslut(sub, "result of subtract");
// };

const showResult = (messageText, result) => {
  console.log(messageText + " " + result);
};

combine(showResult.bind(this, "result of adding numbers :"), SUM, [
  5,
  54,
  5,
  -5,
  12,
]);

combine(showResult.bind(this, "result of subtarcting numbers :"), SUB, [
  1,
  9,
  2,
  "asdasd",
  5,
]);

combine(showResult.bind(this, "result of adding numbers :"), SUM, [
  5645,
  354645,
  54,
  5,
  -5,
  12,
]);
