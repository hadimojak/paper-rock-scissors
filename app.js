const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
let endGame = false;

const getPlayerChoice = () => {
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

const getCamputerChoice = () => {
    const cpuSelections = [ROCK, PAPER, SCISSOR];
    const cpuselect =
        cpuSelections[Math.floor(Math.random() * cpuSelections.length)];
    document.getElementById("cpu").innerHTML = cpuselect;
    return cpuselect;
};

const getWinner = (cChoise, pChoice) => {
    let winner;
    if (
        (cChoise === PAPER && pChoice === ROCK) ||
        (cChoise === ROCK && pChoice === SCISSOR) ||
        (cChoise === SCISSOR && pChoice === PAPER)
    ) {
        console.log("the winner is camputer");
        winner = "camputer";
        document.getElementById("winner").innerHTML = "winner is camputer";
    } else if (cChoise === pChoice) {
        console.log("it is a draw");
        winner = "draw";
        document.getElementById("winner").innerHTML = "it's a draw";
    } else {
        console.log("the winner is player");
        winner = "player";
        document.getElementById("winner").innerHTML = "winner is player";
    }
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

//not releated in game

const sumUp = (sumResult, ...numbers) => {
    const validateNumber = (number) => {
        return !isNaN(number) ? number : 0;
    };

    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    sumResult(sum, "result of sum");
};

// const substract = function (substractReslut, ...numbers) {
//     let sub = 0;
//     for (const num of numbers) {
//         sub -= num;
//     }
//     substractReslut(sub, "result of subtract");
// };

const showResult = (result, messageText) => {
    alert(messageText + " " + result);
    console.log(result);
};

sumUp(showResult, 5, 54, 5, -5, 12);
substract(showResult, 1, 9, 2, 5);
sumUp(showResult, 5645, 354645, 54, 5, -5, 12);
