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


/* PLAYER SECTION */

const createPlayer = (name, token) => {
    return {name, token};
}

const playerOne = createPlayer("Player 1", "X");
const playerTwo = createPlayer("Player 2", "O");


/* GAME CONTROLLER SECTION */

let gameOver = false;
let currentPlayer = playerOne;


const winningPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5,], [6,7,8]];

function switchPlayer() {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
}


function playerTurn(index) {
    if (gameOver) return;

    if (gameBoard[index] !== "") return;

    setSquare(index, currentPlayer.token);
    updateSquareUI(index, currentPlayer.token);

    for (let pattern of winningPatterns) {
        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if (
            gameBoard[a] === currentPlayer.token &&
            gameBoard[b] === currentPlayer.token &&
            gameBoard[c] === currentPlayer.token
        ) {
            gameOver = true;
            showMessage(`${currentPlayer.name} wins!`);
            showResetButton();
            return;
        }
    }

    if (!gameBoard.includes("")) {
        gameOver = true;
        showMessage("It's a tie!");
        showResetButton();
        return;
    }

    switchPlayer();
    showMessage(`${currentPlayer.name}'s turn`);
}


/*DISPLAY CONTROLLER SECTION */

const gameboard = document.getElementById("gameboard");
const squares = document.querySelectorAll('.square');
const messageArea = document.getElementById("messages");
const resetBtn = document.getElementById("resetBtn");

//Event Listeners

squares.forEach(cell => {
    cell.addEventListener('click', () => {
        let index = cell.dataset.index;
        playerTurn(index);
    });
});

resetBtn.addEventListener('click', () => {
    resetBoard();      
    clearBoardUI();      
    gameOver = false;    
    currentPlayer = playerOne;  
    showMessage("Player 1's turn");
    hideResetButton();
});


//Send index to Game Controller Section 



//Update visuals

function showResetButton() {
    resetBtn.classList.add('visible');
}

function hideResetButton() {
    resetBtn.classList.remove('visible');
}

function updateSquareUI(index, token) {
    squares[index].textContent = token;
}


function showMessage(text) {
    messageArea.textContent = text;
}

function clearBoardUI() {
    squares.forEach(cell => cell.textContent = "");

}
