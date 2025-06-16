"use client";
import React from "react";
import "./imageTest.css";

export default function ImageTest() {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 7 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="/GymAppPage1.png" alt="img" />
        </div>

        <div className="item" style={{ "--position": 2 }}>
          <img src="/GymAppPage2.png" alt="img" />
        </div>

        <div className="item" style={{ "--position": 3 }}>
          <img src="/GymAppPage3.png" alt="img" />
        </div>

        <div className="item" style={{ "--position": 4 }}>
          <img src="/GymAppPage4.png" alt="img" />
        </div>

        <div className="item" style={{ "--position": 5 }}>
          <img src="/GymAppPage5.png" alt="img" />
        </div>

        <div className="item" style={{ "--position": 6 }}>
          <img src="/GymAppPage6.png" alt="img" />
        </div>

        <div className="item" style={{ "--position": 7 }}>
          <img src="/GymAppPage7.png" alt="img" />
        </div>
      </div>
    </div>
  );
}
