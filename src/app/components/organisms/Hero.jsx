"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../molecules/Navbar";
import Sidebar from "../molecules/Sidebar";
import HeroBG from "../atoms/HeroBG";

export default function Hero() {
  return (
    // h-[7.8dvh] w-fill flex justify-around items-center  rounded-[27px_27px_0_0] ">
    //     <div className="sm:text-[4dvh] sm:ml-5 lg:text-[6dvh]">
    //       FrontendForge
    //     </div>
    //     <Link
    //       href="/contactPage"
    //       className="cursor-pointer sm:text-[4dvh]  lg:text-[6dvh]"
    <>
      <div className="HeroMainContainer z-[2] h-[100dvh] flex justify-center items-center">
        <div className="HeroMain relative h-[75%] w-[75%]  z-[1] bg-white/5 backdrop-blur-xs">
          <Navbar />
          <Sidebar />
          <div className="HeroText text-amber-50 sm:w-[35dvw] sm:ml-25 sm:mt-5 sm:text-[2.5dvh] lg:w-[35dvw] lg:ml-40 lg:mt-7 lg:text-[2.5dvh]">
            A strategic creative studio focused on building powerful web pages
            that Drives Impact.
          </div>

          <div className="HeroText text-amber-50 sm:mx-auto sm:w-[35dvw] sm:mt-18 sm:text-[2.5dvh] lg:w-[35dvw] lg:mt-55 lg:mr-30 lg:text-[2.5dvh]">
            Hello, my name is Stian Karlsen and i am a web dev located in
            Norway. Spending time designing and building web pages is something
            i truly enjoy. At the end of the day, i go to the gym to clear my
            mind and recharge, building and getting stronger is something i try
            and implement in every aspect of my life.
          </div>
        </div>
        <HeroBG />
      </div>
    </>
  );
}
// sm:w-[35dvw] sm:ml-75 sm:mt-30 sm:text-[2.5dvh] lg:w-[35dvw] lg:ml-105 lg:mt-17 lg:text-[3.1dvh]
