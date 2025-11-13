/* GAMEBOARD SECTION */

let gameBoard = [];

/* GAME CONTROLLER SECTION */

let gameOver = false;

const winningPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5,] [6,7,8]];

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