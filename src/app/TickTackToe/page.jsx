"use client";

import React, { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button className="square h-20 w-20 border-2 m-1 text-xl" onClick={onClick}>
      {value}
    </button>
  );
}

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    if (squares[index]) return; // Do nothing if already filled

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="container max-w-screen min-h-screen flex justify-center items-center">
      <div className="Board grid grid-cols-3 row-span-3 border-2">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

// Husk å lag en "AI" motspiller!

//https://react.dev/learn/tutorial-tic-tac-toe

// - Se over, AI generert
//   What's Next?
//  Add a winner check (calculateWinner)

//  Add a restart/reset button

//  Add an AI opponent (e.g. random or minimax)

//  Add a "key" stroke on the current player's move (like you mentioned earlier)
