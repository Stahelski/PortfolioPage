"use client";

// Husk å lag en "AI" motspiller!

//https://react.dev/learn/tutorial-tic-tac-toe

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Game() {
  function Square() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handelClick() {
      setValue("X");
    }

    return (
      <button
        className="square h-20 w-20 border-2 m-1"
        onClick={handelClick}
        key=""
      >
        {value}
      </button>
    );
  }

  return (
    <div className="container  max-w-screen min-h-screen flex justify-center items-center ">
      <div className="Board grid grid-cols-3 row-span-3 border-2">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

//! - Se over, AI generert =>
//   What's Next?
// ✅ Add a winner check (calculateWinner)

// ✅ Add a restart/reset button

// 🧠 Add an AI opponent (e.g. random or minimax)

// 🎨 Add a "key" stroke on the current player's move (like you mentioned earlier)

// "use client";

// import React, { useState } from "react";

// function Square({ value, onClick }) {
//   return (
//     <button
//       className="square h-20 w-20 border-2 m-1 text-2xl font-bold"
//       onClick={onClick}
//     >
//       {value}
//     </button>
//   );
// }

// export default function Game() {
//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   function handleClick(i) {
//     if (squares[i]) return; // Ignore click if square already filled

//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? "X" : "O";
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   return (
//     <div className="container max-w-screen min-h-screen flex justify-center items-center">
//       <div className="Board grid grid-cols-3">
//         {squares.map((value, i) => (
//           <Square key={i} value={value} onClick={() => handleClick(i)} />
//         ))}
//       </div>
//     </div>
//   );
// }
