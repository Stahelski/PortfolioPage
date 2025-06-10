"use client";

import React from "react";
import Link from "next/link";

import Footer from "../components/organisms/Footer";

export default function projectPage() {
  return (
    <div className="ProjectPageGymmApp text-gray-50 bg-zinc-950 w-screen">
      <div className="AboutNavbar mx-auto mt-7 mb-5 h-[10dvh] w-[95dvw] rounded-[27px] flex justify-around items-center">
        <Link href="/" className="cursor-pointer text-[6dvh]">
          FrontendForge
        </Link>
        <Link href="/contactPage" className="cursor-pointer text-[6dvh]">
          Contact
        </Link>
      </div>

      <div className="projectPageContainer1 bg-stone-300 h-[80dvh] w-screen flex justify-around items-center">
        <div className="ContainerGymApp1Left">
          <div className="HeadLineTextGymAppPage h-[25dvh] w-[40dvw] bg-transparent font-bold text-[50px]">
            Creating a clean design system
          </div>
          <div className="AboutTextLine mb-2 h-[1px] w-[35dvw]"></div>
          <div className="SmalTextGymAppPage pr-50 h-[2dvh] w-[35dvw] bg-transparent text-[12px] flex justify-between items-start">
            <p className="">Meso</p>
            <p className="ml-65">2025</p>
          </div>
          <p className="AboutGymAppText1 pt-4 h-[30dvh] w-[45dvw] bg-transparent">
            I created a much-needed exersise app thatthat allows you to chouse
            from a colection of training plans designed to your own goal.And
            with AI and modern exersise siense, allyou need to do is fill in
            reps and setts the first week and the app calculates the rest fore
            you! so you always make progress!{" "}
          </p>
        </div>

        <div className="ContainerGymApp1Right">
          <div className="ColorPalletGymApp h-[40dvh] w-[30dvw] flex flex-col">
            <div className="ColorPalletGymAppTop flex justify-around">
              <p className="bg-[#FFFFFF] rounded-[27px] h-[70px] w-[70px]"></p>
              <p className="bg-[#404040] rounded-[27px] h-[70px] w-[70px]"></p>
              <p className="bg-[#212121] rounded-[27px] h-[70px] w-[70px]"></p>
              <p className="bg-[#45B622] rounded-[27px] h-[70px] w-[70px]"></p>
            </div>
            <div className="ColorPalletGymAppBottom  pt-4 flex justify-around">
              <p className="bg-[#746F35] rounded-[27px] h-[70px] w-[70px]"></p>
              <p className="bg-[#505050] rounded-[27px] h-[70px] w-[70px]"></p>
            </div>
          </div>
          <div className="MobileStartPageGymApp h-[30dvh] w-[30dvw] bg-amber-200"></div>
        </div>
      </div>

      <div className="projectPageContainer2 flex bg-stone-400  justify-around items-center">
        <div className="ContainerGymApp2Left bg-pink-300 w-[55dvw] h-[55dvh]"></div>
        <div className="ContainerGymApp2Right bg-pink-400 w-[25dvw] h-[55dvh]"></div>
      </div>

      <div className="projectPageContainer3 bg-stone-500  flex justify-around items-center">
        <div className="ContainerGymApp3Left bg-green-300 w-[25dvw] h-[25dvh]"></div>
        <div className="ContainerGymApp3Right bg-green-400 w-[25dvw] h-[25dvh]"></div>
      </div>

      <div className="projectPageContainer4 bg-stone-600  flex justify-around items-center">
        <div className="ContainerGymApp4Left bg-blue-300 w-[25dvw] h-[25dvh]"></div>
        <div className="ContainerGymApp4Right bg-blue-400 w-[25dvw] h-[25dvh]"></div>
      </div>

      <div className="projectPageContainer5 bg-stone-700 flex justify-around items-center">
        <div className="ContainerGymApp5Left bg-gray-300 w-[25dvw] h-[25dvh]"></div>
        <div className="ContainerGymApp5Right bg-gray-400 w-[25dvw] h-[25dvh]"></div>
      </div>

      <Footer />
    </div>
  );
}
