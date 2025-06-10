"use client";

import React from "react";
import Link from "next/link";

import Footer from "../components/organisms/Footer";

export default function projectPage() {
  return (
    <div className="ProjectPageGymmApp w-screen">
      <div className="AboutNavbar mx-auto mt-7 mb-5 h-[10dvh] w-[95dvw] rounded-[27px] flex justify-around items-center">
        <Link href="/" className="cursor-pointer text-[6dvh]">
          FrontendForge
        </Link>
        <Link href="/contactPage" className="cursor-pointer text-[6dvh]">
          Contact
        </Link>
      </div>

      <div className="projectPageContainer1 h-[88dvh] w-screen flex justify-around items-center">
        <div className="ContainerGymApp1Left ml-15">
          <div className="HeadLineTextGymAppPage h-[12dvh] w-[40dvw] font-bold text-5xl">
            <p>Creating a clean</p>
            <p>design system</p>
          </div>
          <div className="AboutTextLine mb-2 h-[1px] w-[35dvw]"></div>
          <div className="SmalTextGymAppPage pr-50 h-[2dvh] w-[35dvw] text-sm flex justify-between items-start">
            <p className="">Meso</p>
            <p className="ml-65">2025</p>
          </div>
          <p className="AboutGymAppText1 pt-4 h-[30dvh] w-[45dvw] text-md">
            I created a much-needed exersise app thatthat allows you to chouse
            from a colection of training plans designed to your own goal.And
            with AI and modern exersise siense, allyou need to do is fill in
            reps and setts the first week and the app calculates the rest fore
            you! so you always make progress!{" "}
          </p>
        </div>

        <div className="ContainerGymApp1Right mr-15 flex felx-row gap-4">
          <div className="ColorPalletGymAppTop pt-5 w-[8dvw] flex flex-col gap-2">
            <div className="bg-[#FFFFFF] rounded-sm h-20 w-20"></div>
            <div className="bg-[#404040] rounded-sm h-20 w-20"></div>
            <div className="bg-[#212121] rounded-sm h-20 w-20"></div>
            <div className="bg-[#45B622] rounded-sm h-20 w-20"></div>
            <div className="bg-[#746F35] rounded-sm h-20 w-20"></div>
            <div className="bg-[#505050] rounded-sm h-20 w-20"></div>
          </div>

          <img
            src="/GymAppMobilPage1.png"
            className="MobileStartPageGymApp h-auto w-[15dvw] rounded-3xl border-4 border-[#45B622] shadow-2xl"
          ></img>
        </div>
      </div>

      <div className="projectPageContainer2 flex mt-10 justify-between items-center w-screen">
        <div className="ContainerGymApp2Images mt-10 mb-10 relative pt-10 w-[65dvw] h-[90dvh]">
          <img
            src="/GymAppPage1.png"
            alt="gymImage1"
            className="absolute top-10 right-10 z-5 translate-x-4 translate-y-2 h-[45dvh] w-auto rounded-sm shadow-xl shadow-gray-900"
          ></img>
          <img
            src="/GymAppPage2.png"
            alt="gymImage2"
            className="absolute top-55 right-80 z-10 h-[45dvh] w-auto translate-x-4 rounded-sm shadow-xl shadow-gray-900"
          ></img>
          <img
            src="/GymAppPage3.png"
            alt="gymImage3"
            className="absolute top-100 right-150 z-15 h-[45dvh] w-auto rounded-sm shadow-xl shadow-gray-900"
          ></img>
        </div>
        <div className="ContainerGymApp2Text mr-35 w-[25dvw]">
          <h2 className="font-bold text-3xl">Consistent</h2>
          <p className="text-md mt-2">
            I created a much-needed exersise app that that allows you to chouse
            from a colection of training plans designed to your own goal. And
            with AI and modern exersise siense, all you need to do is fill in
            reps and setts the first week and the app calculates the rest fore
            you! so you always make progress!{" "}
          </p>
        </div>
      </div>

      <div className="projectPageContainer3 mt-10 flex justify-around items-center">
        <div className="ContainerGymApp3Left ml-15 pt-35 w-[55dvw] h-[60dvh] flex flex-col">
          <p className="text-5xl flex justify-center items-center">
            Color choise
          </p>
          <p className="text-md flex justify-center items-center">
            Some text explaining why i selected thees colors
          </p>
        </div>
        <div className="ContainerGymApp3Right mr-15 w-[45dvw] h-[60dvh] flex justify-center items-center">
          <div className="GymAppColorchoise3 grid grid-cols-3 gap-3 bg-gray-100 border-2 border-gray-400 h-[40dvh] w-[25dvw] rounded-3xl shadow-2xl">
            <div className="ColorBox1 bg-[#ffffff] mt-10 mx-auto h-20 w-20 rounded-sm relative">
              <p className="absolute top-20">#ffffff</p>{" "}
              <p className="absolute bottom-20">Text</p>
            </div>
            <div className="ColorBox2 bg-[#212121] mt-10 mx-auto h-20 w-20 rounded-sm relative">
              <p className="absolute top-20">#212121</p>{" "}
              <p className="absolute bottom-20">Background</p>
            </div>
            <div className="ColorBox3 bg-[#45b622] mt-10 mx-auto h-20 w-20 rounded-sm relative">
              <p className="absolute top-20">#45b622</p>{" "}
              <p className="absolute bottom-20">Primary</p>
            </div>
            <div className="ColorBox4 bg-[#404040] mx-auto h-20 w-20 rounded-sm relative">
              <p className="absolute top-20">#404040</p>{" "}
              <p className="absolute bottom-20">Secondary</p>
            </div>
            <div className="ColorBox5 bg-[#505050] mx-auto h-20 w-20 rounded-sm relative">
              <p className="absolute top-20">#505050</p>{" "}
              <p className="absolute bottom-20">Background.2</p>
            </div>
            <div className="ColorBox6 bg-[#746f35] mx-auto h-20 w-20 rounded-sm relative">
              <p className="absolute top-20">#746f35</p>{" "}
              <p className="absolute bottom-20">Accent</p>
            </div>
          </div>
        </div>
      </div>

      <div className="projectPageContainer4 mt-10 flex justify-around items-center">
        <div className="ContainerGymApp4Left w-[60dvw] h-[60dvh] flex justify-center items-center">
          <div className="GymAppColorchoise3 grid grid-flow-col grid-rows-4 gap-2 bg-gray-100 border-2 border-gray-400 ml-40 h-[35dvh] w-[4005dvw] rounded-3xl shadow-2xl">
            <div className="Font1 mx-auto h-auto w-25 font-bold text-6xl flex justify-center items-center">
              Titel
            </div>
            <div className="Font2 mx-auto h-auto w-25 font-bold text-3xl flex justify-center items-center">
              Titel
            </div>
            <div className="Font3 mx-auto h-auto w-25 font-bold text-xl flex justify-center items-center">
              {" "}
              Body
            </div>
            <div className="Font4 mx-auto h-auto w-25 text-sm flex justify-center items-center">
              Small
            </div>
            <div className="Font5 mx-auto h-auto w-25 font-bold text-6xl flex justify-center items-center">
              64px
            </div>
            <div className="Font6 mx-auto h-auto w-25 font-bold text-3xl flex justify-center items-center">
              32px
            </div>
            <div className="Font7 mx-auto h-auto w-25 font-bold text-xl flex justify-center items-center">
              18px
            </div>
            <div className="Font8 mx-auto h-auto w-25 text-sm flex justify-center items-center">
              14px
            </div>
            <div className="Font9 mx-auto h-auto w-25 text-6xl font-bold flex justify-center items-center">
              R/B
            </div>
            <div className="Font10 mx-auto h-auto w-25 font-bold text-3xl flex justify-center items-center">
              Bold
            </div>
            <div className="Font11 mx-auto h-auto w-25 text-xl font-bold flex justify-center items-center">
              R/B
            </div>
            <div className="Font12 mx-auto h-auto w-25 text-sm flex justify-center items-center">
              Regular
            </div>
            <div className="Font13 mx-auto h-auto w-80 text-6xl font-bold flex justify-center items-center">
              Type: Play
            </div>
            <div className="Font14 mx-auto h-auto w-50 text-3xl font-bold flex justify-center items-center">
              Type: Play
            </div>
            <div className="Font15 mx-auto h-auto w-40 text-xl font-bold flex justify-center items-center">
              Type: Ronoto
            </div>
            <div className="Font16 mx-auto h-auto w-25 text-sm flex justify-center items-center">
              Type: Roboto
            </div>
          </div>
        </div>

        <div className="ContainerGymApp4Right pt-35 w-[45dvw] h-[60dvh]">
          <p className="text-5xl flex justify-center items-center">
            Font choise
          </p>
          <p className="text-md flex justify-center items-center">
            Some text explaining why i selected thees colors
          </p>
        </div>
      </div>

      <div className="projectPageContainer5 pt-30 pb-20 flex justify-around items-center shadow-sm shadow-gray-900">
        <img
          src="/GymAppPage1.png"
          className="ContainerGymApp5Left mb-5 ml-20 w-[50dvw] h-auto rounded-md shadow-2xl shadow-gray-800"
        ></img>
        <img
          src="/GymAppMobilPage1.png"
          className="ContainerGymApp5Right mb-5 mr-20 w-[40dvh] h-auto rounded-3xl border-2 border-[#45b622] shadow-xl shadow-gray-800"
        ></img>
      </div>

      <Footer />
    </div>
  );
}
