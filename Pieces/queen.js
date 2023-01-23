const { Pieces, PIECE_TYPES } = require('./Pieces');

class Queen extends Pieces {
  constructor(color) {
    super(color, PIECE_TYPES.QUEEN);
  }

  move(x1, y1, x2, y2) {
    // handle moving the queen on the board
    // check if the move is valid according to the chess rules for a queen
  }
}

module.exports = Queen;