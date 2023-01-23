const { Pieces, PIECE_TYPES } = require('./Pieces');

class Rook extends Pieces {
  constructor(color) {
    super(color, PIECE_TYPES.ROOK);
  }

  move(x1, y1, x2, y2) {
    // handle moving the rook on the board
    // check if the move is valid according to the chess rules for a rook
  }

  canCastle() {
    // check if the rook can castle
  }
}

module.exports = Rook;