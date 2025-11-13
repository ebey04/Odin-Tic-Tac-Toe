/* GAMEBOARD SECTION */

const GameBoard = (function() {
    let gameBoard = ["","",""];
    
    function setSquare(index, token) {
        gameBoard[index] = token;
    }

    function getSquare(index) {
        return gameBoard[index];
    }

    function resetBoard() {
        gameBoard = ["","",""];
    }

    return {
        setSquare,
        getSquare,
        resetBoard
    };
})();


/* PLAYER SECTION */

const Player = (function() {

    const createPlayer = (name, token) => ({ name, token });

    const playerOne = createPlayer("Player 1", "X");
    const playerTwo = createPlayer("Player 2", "O");

    return {
        playerOne,
        playerTwo
    };

})();


/* GAME CONTROLLER SECTION */

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

        if (GameBoard.getSquare(index) !== "") return;

        GameBoard.setSquare(index, currentPlayer.token);
        DisplayController.updateSquareUI(index, currentPlayer.token);

        for (let pattern of winningPatterns) {
            let a = pattern[0];
            let b = pattern[1];
            let c = pattern[2];

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

        if (!GameBoard.boardIncludesEmpty()) {
            gameOver = true;
            DisplayController.showMessage("It's a tie!");
            DisplayController.showResetButton();
            return;
        }

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



/*DISPLAY CONTROLLER SECTION */

const DisplayController = (function() {

    const boardGame = document.getElementById("gameboard");
    const squares = document.querySelectorAll('.square');
    const messageArea = document.getElementById("messages");
    const resetBtn = document.getElementById("resetBtn");


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


    return {
        updateSquareUI,
        clearBoardUI,
        showMessage,
        showResetButton,
        hideResetButton
    };

})();
