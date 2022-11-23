let board = new Array(8);
let idToSquare = new Map();
// let idToPiece = new Map();
let idToPos = new Map();
let color = 1;
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let nums = ["1", "2", "3", "4", "5", "6", "7", "8"];

// idToPiece.set('wRook', rook);
// idToPiece.set('bRook', book);

// idToPiece.set('wKnight1', wKnight);
// idToPiece.set('bKnight1', bKnight);
// idToPiece.set('wKnight2', wKnight);
// idToPiece.set('bKnight2', bKnight);

// idToPiece.set('wBishop1', wBishop);
// idToPiece.set('bBishop1', bBishop);

// idToPiece.set('wBishop2', wBishop);
// idToPiece.set('bBishop2', bBishop);

// idToPiece.set('wQueen', wQueen);
// idToPiece.set('bQueen', bQueen);

// idToPiece.set('wKing', wKing);
// idToPiece.set('bKing', bKing);

for (var i = 0; i < 8; i++) {
    board[i] = new Array(8);
}

for (var r = 0; r < 8; r++) {

    for (var c = 0; c < 8; c++) {

        // Generate id for the chess board, and create a new square object
        let squareId = letters[c] + nums[7 - r];
        let newSquare = new Square(squareId, /*piece =  */null, [r, c]);

        if (newSquare.squareId == 'a1' || newSquare.squareId == 'h1') {
            newSquare.piece = new Piece('wRook', [r, c], []);
        }

        if (newSquare.squareId == 'a8' || newSquare.squareId == 'h8') {
            newSquare.piece = new Piece('bRook', [r, c], []);
        }

        if (newSquare.squareId == 'b1') {
            newSquare.piece = new Piece('wKnight', [r, c], []);
        }
        if (newSquare.squareId == 'g1') {
            newSquare.piece = new Piece('wKnight', [r, c], []);
        }

        if (newSquare.squareId == 'b8') {
            newSquare.piece = new Piece('bKnight', [r, c], []);
        }
        if (newSquare.squareId == 'g8') {
            newSquare.piece = new Piece('bKnight', [r, c], []);
        }


        if (newSquare.squareId == 'c1' || newSquare.squareId == 'f1') {
            newSquare.piece = new Piece('wBishop', [r, c], []);
        }

        if (newSquare.squareId == 'c8' || newSquare.squareId == 'f8') {
            newSquare.piece = new Piece('bBishop', [r, c], []);
        }

        if (newSquare.squareId == 'd1') {
            newSquare.piece = new Piece('wQueen', [r, c], []);
        }

        if (newSquare.squareId == 'd8') {
            newSquare.piece = new Piece('bQueen', [r, c], []);
        }

        if (newSquare.squareId == 'e1') {
            newSquare.piece = new Piece('wKing', [r, c], []);
        }

        if (newSquare.squareId == 'e8') {
            newSquare.piece = new Piece('bKing', [r, c], []);
        }

        arr = []
        if (newSquare.squareId[1] == '2') {
            arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) + 1))
            arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) + 2))
            newSquare.piece = new Piece('wPawn', [r, c], arr);
        }

        arr = []
        if (newSquare.squareId[1] == '7') {
            arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) - 1))
            arr.push(newSquare.squareId[0] + (parseInt(newSquare.squareId[1]) - 2))
            newSquare.piece = new Piece('bPawn', [r, c], arr);
        }
        // Map the new square to the the correct place in the board
        board[r][c] = newSquare;

        // Update the mapping from id to square
        idToSquare.set(squareId, newSquare);
        idToPos.set([r, c].toString(), newSquare.squareId);
    }
}
