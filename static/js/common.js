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


function piecePos(info) {
    return idToSquare.get(info.parentElement.id).piece.position;
}
