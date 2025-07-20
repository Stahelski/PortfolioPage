"use client";

import React, { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button
      className="square h-8 w-8 border-2 mx-auto my-auto m-1 text-xl"
      onClick={onClick}
    >
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
    <div className="w-full h-full flex justify-center items-center ">
      <div className="Board w-full h-full grid grid-cols-3 row-span-3 bg-sky-950 border-2 rounded-md">
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
