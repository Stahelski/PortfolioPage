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

function calcWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // for hver linje i "lines", ta og destrukturer array i "lines" => const [a, b, c] = lines[i];
  // og hvist a er det samme som b og c, så har vi en vinner => "Her sjekker vi om alle tre rutene i en vinnerlinje har samme verdi."
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function aiPlayer() {}

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calcWinner(squares)) {
      return;
    } // Do nothing if already filled, or return if there is a winner

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calcWinner(squares);
  let status;
  if (winner) {
    status = "Winner is: " + winner;
  } else {
    status = "Next move => " + (xIsNext ? "X" : "O");
  }

  const handelReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="w-full h-full flex justify-center items-center text-sky-300">
      <div className="Board w-full h-full grid grid-cols-3 row-span-3 bg-sky-950 border-2 rounded-md">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="status absolute top-36">
        {status}{" "}
        <button
          className="relative top-1 border rounded-md px-1"
          onClick={handelReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// on klikk, reset spill
// on klikk,

// Husk å lag en "AI" motspiller!
