"use client";
import React from "react";
import Hero from "./components/organisms/Hero";
import ProjectSection from "./components/organisms/projectSection";
import Footer from "./components/organisms/Footer";

// import SilkPulsBackground from "./components/molecules/SilkPulsBackground";

export default function Home() {
  return (
    <div className="overflow-x-scroll overflow-y-hidden">
      <Hero />
      <ProjectSection />
      <Footer />
      {/* <SilkPulsBackground /> */}
    </div>
  );
}
