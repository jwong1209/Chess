import React from 'react';
import './Chessboard.css';

const vertical = [1,2,3,4,5,6,7,8];
const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];

const MyComponent = (props) => {
  let board = []
  for (let i = 0; i < vertical.length; i++) {
    for (let j = 0; j < horizontal.length; j++) {
      const num = i + j;
      if (num % 2 == 0) {
        board.push(
          <div className="white-tile"></div>
        );
      } else {
        board.push(
          <div className="dark-tile"></div>
        );
      }
    }
  }
  return (
    <div id="chessboard">
      {
        /* component JSX goes here */
        board
      }
    </div>
  )
}

export default MyComponent;