const { Pieces, PIECE_TYPES } = require('./Pieces');

class Knight extends Pieces {
  constructor(color) {
    super(color, PIECE_TYPES.KNIGHT);
  }

  move(x1, y1, x2, y2) {
    // handle moving the knight on the board
    // check if the move is valid according to the chess rules for a knight
  }

  /* Not sure if needed
  canJumpOverPieces() {
    // check if the knight can jump over other pieces
  }*/
}

module.exports = Knight;