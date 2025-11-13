/* GAMEBOARD SECTION */

let gameBoard = ["", "", "", "", "", "", "", "", ""]
;

function getSquare(index) {
    return gameBoard[index];
}

function setSquare(index, token) {
    gameBoard[index] = token;
}

function resetBoard() {
    gameBoard = ["", "", "", "", "", "", "", "", ""]
;
}

/* GAME CONTROLLER SECTION */

let gameOver = false;
let currentPlayer = playerOne;


const winningPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5,], [6,7,8]];

function switchPlayer() {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
}


function playerTurn(index) {

    Is gameOver true?

    Yes → return

    No → continue

    Is board[index] empty?

    No → return

    Yes → place current player's token in board[index]

    Loop through winningPatterns

    If a match →

    gameOver = true

    show winning message

    show reset button

    return

    Check for tie

    If NO empty slots →

    gameOver = true

    show tie message

    show reset button

    return

    No win + no tie

    Switch player

    Return (turn ends)

}

/*DISPLAY CONTROLLER SECTION */

const gameboard = document.getElementById("gameboard");
const squares = document.querySelectorAll('.square');
const messageArea = document.getElementById("messages");
const resetBtn = document.getElementById("resetBtn");

//Event Listeners

square.forEach(cell => {
    cell.addEventListener('click', () => {
        let index = cell.dataset.index;
        playerTurn(index);
    });
});

resetBtn.addEventListener

//Send index to Game Controller Section 



//Update visuals

function updateSquareUI(index, token) {
    squares.dataset.index === index;
    squares.dataset.index.textContent = token;
}

function showMessage(text) {
    messageArea.textContent = ""
}

function clearBoardUI() {
    squares.textContent = "";
}

/* PLAYER SECTION */

const createPlayer = (name, token) => {
    return {name, token};
}

const playerOne = createPlayer("Player 1", "X");
const playerTwo = createPlayer("Player 2", "O");