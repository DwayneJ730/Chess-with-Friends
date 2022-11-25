function initializeBoard() {
    let board = new Array(8);

    for (let i = 0; i < 8; i++) {
        board[i] = new Array(8);
    }

    // Iterate over the board, and initialize each square
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            // Map the new square to the correct place in the board
            board[row][col] = initializeSquare(row, col);
        }
    }
}

function initializeSquare(row, col) {
    // Generate id for the current square, and create a new square object
    let squareId = getSquareIdFromRowCol(row, col);
    let newSquare = new Square(squareId, /* piece =  */null, [row, col]);

    // Update the mapping from id to square
    idToSquare.set(squareId, newSquare);
    idToPos.set([row, col].toString(), newSquare.squareId);

    return newSquare;
}

function setupPosition(position) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let square = getSquareFromRowCol(row, col);

            square.piece =
                position[square.squareId] ?
                    new Piece(initialPosition[square.squareId], square.position, []) :
                    null;
        }
    }
}