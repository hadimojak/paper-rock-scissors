const startGameBtn = document.getElementById("start-game-btn");

const person = {
    great: function great(name) {
        console.log(`hellow ${name}`);
    },
};

person.great(prompt("enter your name :", "hadi"));

// function startGame() {
//     console.log("game started !");
// }

// startGame();

// startGameBtn.addEventListener("click", startGame);
