const { Pieces, PIECE_TYPES } = require('./Pieces');

class Pawn extends Pieces {
  constructor(color) {
    super(color, PIECE_TYPES.PAWN);
  }

  move(x1, y1, x2, y2) {
    // handle moving the pawn on the board
    // check if the move is valid according to the chess rules for a pawn
  }

  canPromote() {
    // check if the pawn can be promoted
  }

  promote(pieceType) {
    // handle promoting the pawn to a different type of piece
  }
}

module.exports = Pawn;
  