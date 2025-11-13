/* =========================
   GAMEBOARD MODULE (IIFE)
   ========================= */

const GameBoard = (function() {
    let gameBoard = ["","","","","","","","",""];

    function setSquare(index, token) {
        gameBoard[index] = token;
    }

    function getSquare(index) {
        return gameBoard[index];
    }

    function resetBoard() {
        gameBoard = ["","","","","","","","",""];
    }

    function boardIncludesEmpty() {
        return gameBoard.includes("");
    }

    return {
        setSquare,
        getSquare,
        resetBoard,
        boardIncludesEmpty
    };
})();



/* =========================
   PLAYER MODULE (IIFE)
   ========================= */

const Player = (function() {

    const createPlayer = (name, token) => ({ name, token });

    const playerOne = createPlayer("Player 1", "X");
    const playerTwo = createPlayer("Player 2", "O");

    return {
        playerOne,
        playerTwo
    };

})();



/* =========================
   GAME CONTROLLER MODULE (IIFE)
   ========================= */

const GameController = (function() {

    let gameOver = false;
    let currentPlayer = Player.playerOne;

    const winningPatterns = [
        [0,1,2], 
        [0,3,6], 
        [0,4,8], 
        [1,4,7], 
        [2,4,6], 
        [2,5,8], 
        [3,4,5], 
        [6,7,8]
    ];

    function switchPlayer() {
        currentPlayer = currentPlayer === Player.playerOne ? Player.playerTwo : Player.playerOne;
    }

    function playerTurn(index) {
        if (gameOver) return;

        // Prevent overwriting filled square
        if (GameBoard.getSquare(index) !== "") return;

        // Place token
        GameBoard.setSquare(index, currentPlayer.token);
        DisplayController.updateSquareUI(index, currentPlayer.token);

        // Check for win
        for (let pattern of winningPatterns) {
            let [a, b, c] = pattern;

            if (
                GameBoard.getSquare(a) === currentPlayer.token &&
                GameBoard.getSquare(b) === currentPlayer.token &&
                GameBoard.getSquare(c) === currentPlayer.token
            ) {
                gameOver = true;
                DisplayController.showMessage(`${currentPlayer.name} wins!`);
                DisplayController.showResetButton();
                return;
            }
        }

        // Check for tie
        if (!GameBoard.boardIncludesEmpty()) {
            gameOver = true;
            DisplayController.showMessage("It's a tie!");
            DisplayController.showResetButton();
            return;
        }

        // Continue game
        switchPlayer();
        DisplayController.showMessage(`${currentPlayer.name}'s turn`);
    }

    function resetGame() {
        gameOver = false;
        currentPlayer = Player.playerOne;
    }

    return {
        playerTurn,
        resetGame,
        getCurrentPlayer: () => currentPlayer
    };

})();



/* =========================
   DISPLAY CONTROLLER MODULE (IIFE)
   ========================= */

const DisplayController = (function() {

    const boardGame = document.getElementById("gameboard");
    const squares = document.querySelectorAll('.square');
    const messageArea = document.getElementById("messages");
    const resetBtn = document.getElementById("resetBtn");


    /* --- PRIVATE UI HELPERS (must come before listeners) --- */

    function updateSquareUI(index, token) {
        squares[index].textContent = token;
    }

    function clearBoardUI() {
        squares.forEach(cell => cell.textContent = "");
    }

    function showMessage(text) {
        messageArea.textContent = text;
    }

    function showResetButton() {
        resetBtn.classList.add('visible');
    }

    function hideResetButton() {
        resetBtn.classList.remove('visible');
    }


    /* --- EVENT LISTENERS --- */

    squares.forEach(cell => {
        cell.addEventListener('click', () => {
            let index = Number(cell.dataset.index);
            GameController.playerTurn(index);
        });
    });

    resetBtn.addEventListener('click', () => {
        GameBoard.resetBoard();
        clearBoardUI();
        GameController.resetGame();
        showMessage("Player 1's turn");
        hideResetButton();
    });


    /* --- PUBLIC API --- */

    return {
        updateSquareUI,
        clearBoardUI,
        showMessage,
        showResetButton,
        hideResetButton
    };

})();
