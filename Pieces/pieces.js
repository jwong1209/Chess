class Pieces {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }

  move(x1, y1, x2, y2) {
    // moving a piece and then checking if valid
  }
}

const PIECE_TYPES = {
  PAWN: 1,
  ROOK: 2,
  KNIGHT: 3,
  BISHOP: 4,
  QUEEN: 5,
  KING: 6,
}

const COLORS = {
  WHITE: 1,
  BLACK: 2
};

module.exports = { Pieces, PIECE_TYPES , COLORS};