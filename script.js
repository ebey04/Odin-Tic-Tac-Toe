/* GAMEBOARD SECTION */

let gameBoard = [];

/* GAME CONTROLLER SECTION */

let gameOver = false;
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