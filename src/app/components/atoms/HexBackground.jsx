import React from "react";
import honeyComb from "./honeyComb.css";

export default function honeyCombBackground() {
  const rows = [];

  for (let i = 0; i < 21; i++) {
    const boxes = [];

    for (let j = 0; j < 99; j++) {
      boxes.push(<div key={j} className="box"></div>);
    }

    rows.push(
      <div key={i} className={`row ${i % 2 === 1 ? "offset" : ""}`}>
        {boxes}
      </div>
    );
  }

  return <div className="container">{rows}</div>;
}
