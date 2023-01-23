const { Pieces, PIECE_TYPES } = require('./Pieces');

class King extends Pieces {
  constructor(color) {
    super(color, PIECE_TYPES.KING);
  }

  move(x1, y1, x2, y2) {
    // handle moving the king on the board
    // check if the move is valid according to the chess rules for a king
  }

  canCastle() {
    // check if the king can castle
  }

  isInCheck() {
    // check if the king is in check
  }

  isCheckMate() {
    // check if the king is in checkmate
  }
}

module.exports = King;
