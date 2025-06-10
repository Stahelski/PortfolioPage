"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../molecules/Navbar";
import Sidebar from "../molecules/Sidebar";
import HeroBG from "../atoms/HeroBG";

export default function Hero() {
  return (
    <>
      <div className="HeroMainContainer z-[2] h-[100dvh] flex justify-center items-center">
        <div className="HeroMain relative h-auto w-[75%]  z-[1] bg-white/30 backdrop-blur-xs">
          <Navbar />
          <Sidebar />
          <div className="h-auto w-5% font-bold ml-70 mt-12">
            A strategic creative studio focused on building powerful web pages
            that Drives Impact.
          </div>

          <div className="h-auto w-[25dvw] ml-185 mt-35 font-bold">
            Hello, my name is Stian Karlsen and i am a web dev located in
            Norway. Spending time designing and building web pages is something
            i truly enjoy. At the end of the day, i go to the gym to clear my
            mind and recharge, building and getting stronger is something i try
            and implement in every aspect of my life.
            <div className="w-[12.7dvh] h-[6.7dvh]  z-[1] bg-amber-200 flex justify-center items-center rounded-full relative group">
              <Link
                href="/aboutPage"
                className="RoundBtn w-[12dvh] h-[6dvh] text-amber-50 flex justify-center items-center rounded-full "
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <HeroBG />
      </div>
    </>
  );
}
