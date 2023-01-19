/**
 * createBoard: creates a new board of nrows by ncols with mixture of "O" for
 * cells that are "on" and "." for those that are off. Chance of an individual
 * cell being on is determined by chanceLightStartsOn float.
 * @param {integer} nrows number of rows
 * @param {integer} ncols number of cols
 * @param {float} chanceLightStartsOn between 0.0 and 1.0, inclusive
 * @returns
 */
function createBoard(nrows, ncols, chanceLightStartsOn) {
    let initialBoard = [];

    for (let y = 0; y < nrows; y++) {
        initialBoard.push([]);

        for (let x = 0; x < ncols; x++) {
            let cell = Math.random() < chanceLightStartsOn;
            initialBoard[y].push(cell);
        }
    }

    return initialBoard;
}

/**
 * hasWon: checks if the provided board includes all ".", meaning that it's a
 * winning board.
 * @returns true if board all ".", or false if not.
 */
function hasWon(board) {
    for (let row of board) {
      if (row.includes("O")) {
        return false;
      }
    }

    return true;
  }


export { createBoard, hasWon };