"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../molecules/Navbar";
import Sidebar from "../molecules/Sidebar";
import HeroBG from "../atoms/HeroBG";
// import SilkPulsBackground from "../molecules/SilkPulsBackground";

export default function Hero() {
  return (
    <div className="HeroMainContainer relative z-[2] h-[60dvh] sm:h-screen w-screen flex justify-center items-center">
      <h1 className="absolute top-4 mx-auto sm:left-8 text-[#F5C19A] text-4xl z-5">
        FrontendForge
      </h1>
      <div className="HeroMain relative h-3/4 w-3/4 z-[1] mt-12  bg-white/5 backdrop-blur-sm">
        <Navbar />

        <div className="flex justify-center items-start w-full h-full">
          <div className="flex flex-col items-center text-xl sm:text-4xl md:text-5xl xl:text-6xl mt-5 sm:mt-21">
            <h1 className="text-[#FFF4EB] mb-2">A strategic creative studio</h1>
            <h1 className="text-[#FFF4EB]">That drives impact!</h1>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg text-[#FFE8CF] mt-8">
              I'm Stian Karlsen, a web developer located in
            </p>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg text-[#FFE8CF]">
              Norway. I truly enjoy designing and building
            </p>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg text-[#FFE8CF]">
              Webpages
            </p>
          </div>
        </div>
      </div>
      {/* <SilkPulsBackground /> */}
      <HeroBG />
    </div>
  );
}
{
  /* <div className="col-start-1 col-span-4 row-start-1 flex">
<h1 className="HeroText flex-1 text-zinc-50 text-lg sm:text-lg sm:pl-[18%] md:text-2xl lg:text-2xl xl:text-4xl xl:pl-[10%] xl:pt-8 leading-tight w-full">
  <p>A strategic creative studio</p>
  <p>Focused on building powerful web pages</p>
  <p>And apps that drives impact.</p>
</h1>
</div>

<div className="col-start-5 col-span-2 row-start-5 flex items-end">
<p className="HeroText text-sm sm:text-base md:text-lg lg:text-xl text-zinc-100 leading-relaxed max-w-xl">
  I'm Stian Karlsen, a web developer located in Norway. I truly
  enjoy designing and building websites.
</p>
</div> */
}
