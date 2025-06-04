"use client";

import React from "react";
import Hero from "../../components/organisms/Hero";
import ProjectSection from "@/app/components/organisms/projectSection";


export default function FrontPage() {
  return (
    <div className="flex flex-col overflow-x-scroll overflow-y-hidden">
      <Hero />
      <ProjectSection />
    </div>
  );
}
