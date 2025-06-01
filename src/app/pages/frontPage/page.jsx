"use client";

import React from "react";
import Navbar from "../../components/organisms/Navbar";
import Hero from "../../components/organisms/Hero";
import ProjectSection from "../../components/organisms/projectSection";
import Footer from "../../components/organisms/Footer";

export default function FrontPage() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-scroll overflow-y-hidden">
      {/* <Navbar /> */}
      <Hero />
      {/* <ProjectSection />
      <Footer /> */}
    </div>
  );
}
