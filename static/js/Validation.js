function validateMoves(thisPiece, moves) {
    let vMoves = [];

    for (let i = 0; i < moves.length; i++) {
        let pieceOnSquare = idToSquare.get(moves[i]).piece;
        if (pieceOnSquare === null) {
            vMoves.push(moves[i])
        } else if (pieceOnSquare.color[0] !== thisPiece.color[0]) {
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

    idToSquare.get(obj.parentElement.id).piece.availableSquares = vNotation;
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
}

function allRookMoves(obj) {
    var moves = [];

    hor = allHorizontalMoves(obj)
    vert = allVerticalMoves(obj)

    moves = vert.concat(hor);

    idToSquare.get(obj.parentElement.id).piece.availableSquares = moves;
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

    idToSquare.get(obj.parentElement.id).piece.availableSquares = vNotation;
}

function allQueenMoves(obj) {
    var moves = [];

    hor = allHorizontalMoves(obj)
    vert = allVerticalMoves(obj)
    diag = allDiagMoves(obj)
    moves = vert.concat(hor, diag);

    idToSquare.get(obj.parentElement.id).piece.availableSquares = moves;
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

    idToSquare.get(info.parentElement.id).piece.availableSquares = vNotation;

    return vNotation;
}
