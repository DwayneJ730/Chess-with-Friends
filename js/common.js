let idToSquare = new Map();
let idToPos = new Map();
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let nums = ["1", "2", "3", "4", "5", "6", "7", "8"];

function print(square) {
    console.log(idToSquare.get(square.id));
}

function getSquareFromId(id) {
    return idToSquare.get(id);
}

function getSquareIdFromRowCol(row, col) {
    return letters[col] + nums[7 - row];
}

function  getSquareFromRowCol(row, col) {
    return getSquareFromId(getSquareIdFromRowCol(row, col));
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
