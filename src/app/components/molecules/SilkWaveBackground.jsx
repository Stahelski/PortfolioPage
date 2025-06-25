"use client";
import SilkPuls from "../atoms/SilkWave";
import { useState } from "react";

export default function SilkWaveBackground() {
  const [bgColor, setBgColor] = useState("#C48843");

  const colorPalet = ["#89CFF0", "#B53F6A", "#B0C4DE", "#C48843"];

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: -2 }}>
        {/* Bruk key for å remounte SilkPuls ved fargeendring */}
        <SilkPuls
          key={bgColor}
          color={bgColor}
          speed={5.5}
          scale={1}
          noiseIntensity={1.2}
        />
      </div>

      <div style={{ position: "fixed", top: 20, right: 25, zIndex: 100 }}>
        {colorPalet.map((fargeKode) => (
          <button
            key={fargeKode}
            onClick={() => setBgColor(fargeKode)}
            style={{
              backgroundColor: fargeKode,
              width: 10,
              height: 10,
              borderRadius: "50%",
              margin: "5px",
              cursor: "pointer",
              border: bgColor === fargeKode ? "2px solid white" : "none",
            }}
          />
        ))}
      </div>
    </>
  );
}

// defaultBrown: "bg-[#A27E48]",
// BabyBlue: "bg-[#89CFF0]",
// RasberryRose: "bg-[#B53F6A]",
// PowderBlue: "bg-[#B0C4DE]",
// RoseQuartz: "bg-[#9F9AA4]",
// ForestGreen: "bg-[#3E853A]",

// "use client";
// import SilkPuls from "../atoms/SilkWave";

// export default function silkPulsBackground() {
//   return (
//     <div style={{ position: "fixed", inset: 0, zIndex: -2 }}>
//       <SilkPuls color="#B0C4DE" speed={4.5} scale={1} noiseIntensity={1.2} />
//     </div>
//   );
// }
