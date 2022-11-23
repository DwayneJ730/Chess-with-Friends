let board = new Array(8);
let idToSquare = new Map();
let idToPos = new Map();
let color = 1;
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let nums = ["1", "2", "3", "4", "5", "6", "7", "8"];


function initializeBoard() {
    for (var i = 0; i < 8; i++) {
        board[i] = new Array(8);
    }

    for (var r = 0; r < 8; r++) {
        for (var c = 0; c < 8; c++) {
            // Generate id for the chess board, and create a new square object
            let squareId = letters[c] + nums[7 - r];
            let newSquare = new Square(squareId, /*piece =  */null, [r, c]);

            newSquare.piece = initializeSquare(squareId);

            // Map the new square to the the correct place in the board
            board[r][c] = newSquare;

            // Update the mapping from id to square
            idToSquare.set(squareId, newSquare);
            idToPos.set([r, c].toString(), newSquare.squareId);
        }
    }
}

function initializeSquare(squareId) {
    if (newSquare.squareId == 'a1' || newSquare.squareId == 'h1') {
        return new Piece('wRook', [r, c], []);
    }

    if (newSquare.squareId == 'a8' || newSquare.squareId == 'h8') {
        return new Piece('bRook', [r, c], []);
    }

    if (newSquare.squareId == 'b1') {
        return new Piece('wKnight', [r, c], []);
    }
    if (newSquare.squareId == 'g1') {
        return new Piece('wKnight', [r, c], []);
    }

    if (newSquare.squareId == 'b8') {
        return new Piece('bKnight', [r, c], []);
    }
    if (newSquare.squareId == 'g8') {
        return new Piece('bKnight', [r, c], []);
    }


    if (newSquare.squareId == 'c1' || newSquare.squareId == 'f1') {
        return new Piece('wBishop', [r, c], []);
    }

    if (newSquare.squareId == 'c8' || newSquare.squareId == 'f8') {
        return new Piece('bBishop', [r, c], []);
    }

    if (newSquare.squareId == 'd1') {
        return new Piece('wQueen', [r, c], []);
    }

    if (newSquare.squareId == 'd8') {
        return new Piece('bQueen', [r, c], []);
    }

    if (newSquare.squareId == 'e1') {
        return new Piece('wKing', [r, c], []);
    }

    if (newSquare.squareId == 'e8') {
        return new Piece('bKing', [r, c], []);
    }

    arr = []
    if (newSquare.squareId[1] == '2') {
        arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) + 1))
        arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) + 2))
        return new Piece('wPawn', [r, c], arr);
    }

    arr = []
    if (newSquare.squareId[1] == '7') {
        arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) - 1))
        arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) - 2))
        return new Piece('bPawn', [r, c], arr);
    }
}