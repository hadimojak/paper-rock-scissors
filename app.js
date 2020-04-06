const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
let endGame = false;

const getPlayerChoice = function () {
    const selection = prompt(
        `${ROCK} ,${PAPER} or ${SCISSOR}`,
        ""
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
        alert(`invalid choice! we chose ROCK for you .`);
        document.getElementById("player").innerHTML = ROCK;
        return ROCK;
    }
    document.getElementById("player").innerHTML = selection;
    return selection;
};

const getCamputerChoice = function () {
    const cpuSelections = [ROCK, PAPER, SCISSOR];
    const cpuselect =
        cpuSelections[Math.floor(Math.random() * cpuSelections.length)];
    document.getElementById("cpu").innerHTML = cpuselect;
    return cpuselect;
};

const getWinner = function (cChoise, pChoice) {
    let winner;
    if (
        (cChoise === PAPER && pChoice === ROCK) ||
        (cChoise === ROCK && pChoice === SCISSOR) ||
        (cChoise === SCISSOR && pChoice === PAPER)
    ) {
        console.log("the winner is camputer");
        winner = "camputer";
        document.getElementById("winner").innerHTML = 'winner is camputer';
    } else if (cChoise === pChoice) {
        console.log("it is a draw");
        winner = "draw";
        document.getElementById("winner").innerHTML = "it's a draw";
    } else {
        console.log("the winner is player");
        winner = "player";
        document.getElementById("winner").innerHTML = 'winner is player';
    }
};

startGameBtn.addEventListener("click", function () {
    // if (endGame) {
    //     //for once lounch the game
    //     return;
    // }
    endGame = true;
    console.log("game started !");
    // console.log(getPlayerChoice());
    // console.log(getCamputerChoice());
    const playerSelection = getPlayerChoice(); //we can store function in const and use it
    const camputerSelection = getCamputerChoice();
    const theWinner = getWinner(camputerSelection, playerSelection);
    // console.log(theWinner);
});
