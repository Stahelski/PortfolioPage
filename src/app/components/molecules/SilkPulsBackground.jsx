"use client";
import SilkPuls from "../atoms/SilkPuls";

export default function silkPulsBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -2 }}>
      <SilkPuls color="#d4eaf7" speed={4.5} scale={1} noiseIntensity={1.2} />
    </div>
  );
}
