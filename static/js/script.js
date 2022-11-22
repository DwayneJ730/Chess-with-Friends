class Square {
    constructor(squareId, piece, position) {
        this.squareId = squareId;
        this.piece = piece;
        this.position = position;
    }
}

class Piece {
    constructor(color, position, availableSquares) {
        this.color = color;
        this.position = position;
        this.availableSquares = availableSquares;
    }
}

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

// for (var r = 0; r < 8; r++) {
//     for (var c = 0; c < 8; c++) {
//         console.log(board[r][c].squareId, r, c);
//     }
// }
console.log(idToSquare);

function print(square) {
    console.log(idToSquare.get(square.id));
}

function getSquareFromId(id) {
    return idToSquare.get(id);
}

function toNotation(position) {
    return idToPos.get(position.toString());
}

function getPiece(info) {

    return idToSquare.get(info.parentElement.id).piece
}

function validateMoves(thisPiece, moves) {
    var vMoves = [];
    for (var i = 0; i < moves.length; i++) {
        // console.log(idToSquare.get(moves[i]).piece)
        if (idToSquare.get(moves[i]).piece == null || idToSquare.get(moves[i]).piece.color[0] != thisPiece.color[0]) {
            vMoves.push(moves[i])
        }

    }

    return vMoves;
}

function allPawnMoves(obj) {
    var moves = [];
    pos = piecePos(obj);
    r = pos[0];
    c = pos[1];
    moves = [];
    notation = [];

    if (idToSquare.get(obj.parentElement.id).piece.color == 'wPawn') {
        moves.push([r - 1, c]);
        if (r == 6) {
            moves.push([r - 2, c]);
        }
        if (c - 1 >= 0) {
            moves.push([r - 1, c - 1]);
        }
        if (c + 1 < 8) {
            moves.push([r - 1, c + 1]);
        }
    }

    if (idToSquare.get(obj.parentElement.id).piece.color == 'bPawn') {
        moves.push([r + 1, c]);
        if (r == 1) {
            moves.push([r + 2, c]);
        }
        if (c - 1 >= 0) {
            moves.push([r + 1, c - 1]);
        }
        if (c + 1 < 8) {
            moves.push([r + 1, c + 1]);
        }
    }

    for (var i = 0; i < moves.length; i++) {
        notation.push(toNotation(moves[i]));
    }

    notation = [...new Set(notation)];

    var vNotation = validateMoves(getPiece(obj), notation)
    console.log(vNotation)

    idToSquare.get(obj.parentElement.id).piece.availableSquares = vNotation;
    console.log(idToSquare.get(obj.parentElement.id).piece.availableSquares)

}

function allKnightMoves(obj) {
    var moves = [];
    pos = piecePos(obj);
    r = pos[0];
    c = pos[1];
    moves = [];
    notation = [];

    for (var i = 1; i <= 7; i++) {
        if (r + 2 < 8 && c + 1 < 8) {
            moves.push([r + 2, c + 1]);
        }

        if (r + 2 < 8 && c - 1 >= 0) {
            moves.push([r + 2, c - 1]);
        }

        if (r - 2 >= 0 && c - 1 >= 0) {
            moves.push([r - 2, c - 1]);
        }

        if (r - 2 >= 0 && c + 1 < 8) {
            moves.push([r - 2, c + 1]);
        }

        if (c + 2 < 8 && r + 1 < 8) {
            moves.push([r + 1, c + 2]);
        }

        if (c + 2 < 8 && r - 1 >= 0) {
            moves.push([r - 1, c + 2]);
        }

        if (c - 2 >= 0 && r - 1 >= 0) {
            moves.push([r - 1, c - 2]);
        }

        if (c - 2 >= 0 && r + 1 < 8) {
            moves.push([r + 1, c - 2]);
        }
    }

    for (var i = 0; i < moves.length; i++) {
        notation.push(toNotation(moves[i]));
    }

    notation = [...new Set(notation)];

    var vNotation = validateMoves(getPiece(obj), notation)

    idToSquare.get(obj.parentElement.id).piece.availableSquares = vNotation;
}

function allBishopMoves(obj) {
    var moves = [];
    moves = allDiagMoves(obj);

    idToSquare.get(obj.parentElement.id).piece.availableSquares = moves;
    console.log(idToSquare.get(obj.parentElement.id).piece.availableSquares)

}

function allRookMoves(obj) {
    var moves = [];

    hor = allHorizontalMoves(obj)
    vert = allVerticalMoves(obj)

    moves = vert.concat(hor);

    idToSquare.get(obj.parentElement.id).piece.availableSquares = moves;
    console.log(idToSquare.get(obj.parentElement.id).piece.availableSquares)
}

function allKingMoves(obj) {
    var moves = [];
    pos = piecePos(obj)
    r = pos[0]
    c = pos[1];
    notation = [];

    if (r - 1 >= 0 && c - 1 >= 0) {
        moves.push([r - 1, c - 1]);
    }

    if (r + 1 < 8 && c + 1 < 8) {
        moves.push([r + 1, c + 1]);
    }

    if (r - 1 >= 0 && c + 1 < 8) {
        moves.push([r - 1, c + 1]);
        moves.push([r - 1, c]);
        moves.push([r, c + 1]);
    }

    if (c - 1 >= 0 && r + 1 < 8) {
        moves.push([r + 1, c - 1]);
        moves.push([r + 1, c]);
        moves.push([r, c - 1]);
    }

    for (var i = 0; i < moves.length; i++) {
        notation.push(toNotation(moves[i]));
    }

    notation = [...new Set(notation)];

    var vNotation = validateMoves(getPiece(obj), notation)
    console.log(vNotation)

    idToSquare.get(obj.parentElement.id).piece.availableSquares = vNotation;
    console.log(idToSquare.get(obj.parentElement.id).piece.availableSquares)

}

function allQueenMoves(obj) {
    var moves = [];

    hor = allHorizontalMoves(obj)
    vert = allVerticalMoves(obj)
    diag = allDiagMoves(obj)
    moves = vert.concat(hor, diag);

    idToSquare.get(obj.parentElement.id).piece.availableSquares = moves;
    console.log(idToSquare.get(obj.parentElement.id).piece.availableSquares)

}

function allVerticalMoves(info) {
    pos = piecePos(info)
    row = pos[0]
    col = pos[1];
    vertMoves = [];
    notation = [];

    // Get all possible vertical moves, and push them onto the list
    for (var i = 0; i <= 7; i++) {
        if (i != row) {
            vertMoves.push([i, col]);
        }
    }

    for (var i = 0; i < vertMoves.length; i++) {
        notation.push(toNotation(vertMoves[i]));
    }

    var vNotation = validateMoves(getPiece(info), notation)


    idToSquare.get(info.parentElement.id).piece.availableSquares = vNotation;


    return vNotation
}

function allHorizontalMoves(info) {
    pos = piecePos(info)
    r = pos[0]
    c = pos[1];
    horMoves = [];
    notation = [];

    for (var i = 0; i <= 7; i++) {
        if (i != c) {
            horMoves.push([r, i]);
        }
    }

    for (var i = 0; i < horMoves.length; i++) {
        notation.push(toNotation(horMoves[i]));
    }

    var vNotation = validateMoves(getPiece(info), notation)


    idToSquare.get(info.parentElement.id).piece.availableSquares = vNotation;

    return vNotation
}

function allDiagMoves(info) {
    pos = piecePos(info);
    r = pos[0];
    c = pos[1];
    moves = [];
    notation = []
    for (var i = 1; i <= 7; i++) {
        if (r - i >= 0 && c - i >= 0) {
            moves.push([r - i, c - i]);
        }

        if (r + i < 8 && c + i < 8) {
            moves.push([r + i, c + i]);
        }

        if (r + i < 8 && c - i >= 0) {
            moves.push([r + i, c - i]);
        }

        if (r - i >= 0 && c + i < 8) {
            moves.push([r - i, c + i]);
        }
    }

    for (var i = 0; i < moves.length; i++) {
        notation.push(toNotation(moves[i]));
    }

    var vNotation = validateMoves(getPiece(info), notation)
    console.log(vNotation)

    idToSquare.get(info.parentElement.id).piece.availableSquares = vNotation;

    return vNotation;
}

function piecePos(info) {
    return idToSquare.get(info.parentElement.id).piece.position;
}


let testSquare = getSquareFromId("b4");
// console.log(testSquare);
// console.table(board);

/* draggable element */

const draggables = document.querySelectorAll('.piece');
const droppables = document.querySelectorAll('.darkSquare, .lightSquare');
let currentSquare = null;
let currentPiece = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('drag', drag);
    draggable.addEventListener('dragend', dragEnd);
});

droppables.forEach(droppable => {
    droppable.addEventListener('dragenter', dragEnter);
    droppable.addEventListener('dragover', dragOver);
    droppable.addEventListener('dragleave', dragLeave);
    droppable.addEventListener('drop', drop);
})

function dragStart(event) {
    currentPiece = event.target;
    currentSquare = getSquareFromId(currentPiece.parentNode.id);
    currentPiece.click()
}

function drag(event) {
}

function dragEnd(event) {

}

function dragEnter(event) {
    event.preventDefault();
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
}

function drop(event) {
    event.preventDefault();

    let targetSquare = event.target;
    let targetSquareId = targetSquare.id;
    let targetSquareParentId = targetSquare.parentNode.id;
    let newSquareObject = getSquareFromId(targetSquareId);
    let newSquareParentObject = null;

    // If there is a targetSquareParentId, that means a piece is on the square
    if (targetSquareParentId) {
       newSquareParentObject = getSquareFromId(targetSquareParentId);
    }

    // Only place piece if it is a valid move
    if (currentSquare.piece.availableSquares.includes(targetSquareId) ||
        currentSquare.piece.availableSquares.includes(targetSquareParentId)) {

        // First remove the piece from its previous square
        currentPiece.parentNode.removeChild(currentPiece);

        // Check to see if there is a piece on the square
        if (newSquareParentObject) {
            if (newSquareParentObject.piece != null) {
                console.log("Detected enemy piece");

                // Since there is a enemy piece, we need to get access to the piece's parent square html element
                let parentElement = targetSquare.parentNode;

                // Remove the enemy piece from the board
                parentElement.removeChild(parentElement.firstElementChild);

                // Make the current piece the new child of the parent for the target square
                parentElement.append(currentPiece);

                // Update what piece the square holds
                newSquareParentObject.piece = currentSquare.piece;
                newSquareParentObject.piece.position = newSquareParentObject.position;
            }
        } else {
            // Drop the piece on the new square
            targetSquare.appendChild(currentPiece);

            // Set the piece inside the new square object
            newSquareObject.piece = currentSquare.piece;
            newSquareObject.piece.position = newSquareObject.position;
        }

        currentSquare.piece.availableSquares = [];
    }
}