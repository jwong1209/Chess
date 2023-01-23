const { Pieces, PIECE_TYPES } = require('./Pieces');

class Bishop extends Pieces {
  constructor(color) {
    super(color, PIECE_TYPES.BISHOP);
  }

  move(x1, y1, x2, y2) {
    // handle moving the bishop on the board
    // check if the move is valid according to the chess rules for a bishop
  }
}

module.exports = Bishop;