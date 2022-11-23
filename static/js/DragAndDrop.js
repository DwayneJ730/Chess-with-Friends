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
