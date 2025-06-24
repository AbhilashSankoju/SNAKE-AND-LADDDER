let tog = 1;
let rollingSound = new Audio('dice.mp3');
let winSound = new Audio('vic.mp3');

let players = { p1: 0, p2: 0 };
let currentPlayer = "p1";

// Define snakes and ladders
const movementMap = {
    13: 27, 16: 67, 28: 32, 33: 49, 42: 63,
    53: 87, 62: 80, 72: 90, 85: 95, 98: 79,
    86: 66, 78: 24, 71: 9, 56: 36, 47: 26,
    39: 20, 23: 3, 30: 10
};

document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play();
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    k=document.getElementById("diceImg");
    k.src=`${diceRoll}.jpg`;
    console.log(`${diceRoll}.jpg`);
    let newPosition = players[currentPlayer] + diceRoll;
    
    if (newPosition <= 100) {
        // Apply snake or ladder adjustment
        if (movementMap[newPosition]) {
            newPosition = movementMap[newPosition];
        }
        console.log(currentPlayer,newPosition);
        players[currentPlayer] = newPosition;
        let newBox = document.getElementById(`b${newPosition}`);
        let playerDiv = document.getElementById(currentPlayer);
        newBox.appendChild(playerDiv);
        if (newPosition === 100) {
            winSound.play();
            alert(`${currentPlayer.toUpperCase()} wins! 🎉`);
        }

        currentPlayer = currentPlayer === "p1" ? "p2" : "p1";
        document.getElementById('tog').innerText = currentPlayer === "p1" ? "Yellow's Turn" : "Red's Turn";
    }
});