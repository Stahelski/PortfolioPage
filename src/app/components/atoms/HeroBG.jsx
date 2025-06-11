"use client";
import React from "react";

export default function HeroBG() {
  return (
    <>
      <div className="BG z-[0] bg-transparent absolute right-0 w-full h-full overflow-hidden">
        <img
          src="/BGMe-pica1.png"
          alt="Background"
          className="h-full w-full object-cover sm:object-overflow sm:w-screen sm:h-screen"
        />
      </div>
    </>
  );
}
