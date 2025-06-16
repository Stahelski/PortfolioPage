"use client";

import React from "react";
import Link from "next/link";
import ImageCarusel from "../components/functions/ImgSlider";
import ImageTest from "../components/functions/imageTest";

import Footer from "../components/organisms/Footer";

export default function projectPage() {
  return (
    <div className="ProjectPageGymmApp grid grig-row-1 w-screen">
      <div className="AboutNavbar mx-auto mt-6 mb-4 h-[10vh] w-[95%] rounded-2xl flex flex-col sm:flex-row justify-around items-center px-4">
        <Link href="/" className="cursor-pointer text-[6dvh]">
          FrontendForge
        </Link>
        <Link href="/contactPage" className="cursor-pointer text-[6dvh]">
          Contact
        </Link>
      </div>

      <div className="projectPageContainer1 flex flex-col lg:flex-row justify-around items-center w-full px-6 py-8 gap-8">
        <div className="ContainerGymApp1Left max-w-xl">
          <div className="HeadLineTextGymAppPage mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
            <p>Creating a clean</p>
            <p>design system</p>
          </div>
          <div className="AboutTextLine mb-4 h-px bg-gray-500 w-full max-w-md"></div>
          <div className="SmalTextGymAppPage flex justify-start text.sm mb-4">
            <p className="">Meso</p>
            <p className="ml-65">2025</p>
          </div>
          <p className="AboutGymAppText1 text-base sm:text-md md:text-lg leading-relaxed max-w-xl">
            I created a much-needed exersise app thatthat allows you to chouse
            from a colection of training plans designed to your own goal.And
            with AI and modern exersise siense, allyou need to do is fill in
            reps and setts the first week and the app calculates the rest fore
            you! so you always make progress!{" "}
          </p>
        </div>

        <div className="ContainerGymApp1Right flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center w-1/3">
          <div className="ColorPalletGymAppTop flex md:flex-col gap-2">
            <div className="bg-[#FFFFFF] rounded-sm h-16 w-16 sm:h-20 sm:w-20"></div>
            <div className="bg-[#404040] rounded-sm h-16 w-16 sm:h-20 sm:w-20"></div>
            <div className="bg-[#212121] rounded-sm h-16 w-16 sm:h-20 sm:w-20"></div>
            <div className="bg-[#45B622] rounded-sm h-16 w-16 sm:h-20 sm:w-20"></div>
            <div className="bg-[#746F35] rounded-sm h-16 w-16 sm:h-20 sm:w-20"></div>
            <div className="bg-[#505050] rounded-sm h-16 w-16 sm:h-20 sm:w-20"></div>
          </div>

          <img
            src="/GymAppMobil1.png"
            className="MobileStartPageGymApp w-32 sm:w-40 md:w-48 lg:w-60 h-auto rounded-3xl border-4 border-[#45B622] shadow-2xl"
          ></img>
        </div>
      </div>

      <div className="projectPageContainer2 flex flex-col lg:flex-row items-center justify-between gap-10 mt10 w-screen px-6">
        <div className="ContainerGymApp2Images relative w-screen md:mb-15 md:mt-5 lg:w-2/3 h-[60dvh] sm:h-[70vh] md:h-[85vh]">
          <img
            src="/GymAppPage1.png"
            alt="gymImage1"
            className="absolute top-10 right-4 sm:right-20 w-[40%] sm:w-[40%] rounded-sm shadow-xl shadow-gray-900 z-10"
          ></img>
          <img
            src="/GymAppPage2.png"
            alt="gymImage2"
            className="absolute top-[27%] right-[25%] w-[40%] sm:w-[40%] rounded-sm shadow-xl shadow-gray-900 z-20"
          ></img>
          <img
            src="/GymAppPage3.png"
            alt="gymImage3"
            className="absolute top-[47%] right-[45%] w-[40%] sm:w-[40%] rounded-sm shadow-xl shadow-gray-900 z-30"
          ></img>
        </div>
        <div className="ContainerGymApp2Text mb-15 mt-5 w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="font-bold text-3xl">Consistent</h2>
          <p className="text-md mt-2 mr-15 leading-relaxed">
            I created a much-needed exersise app that that allows you to chouse
            from a colection of training plans designed to your own goal. And
            with AI and modern exersise siense, all you need to do is fill in
            reps and setts the first week and the app calculates the rest fore
            you! so you always make progress!{" "}
          </p>
        </div>
      </div>

      <div className="projectPageContainer3 mt-15 flex flex-col lg:flex-row justify-around items-center w-full min-h-[60vh]">
        <div className="ContainerGymApp3Left  mx-15 mt-10 sm:mt-0 lg:max-w-md text-center lg:text-left">
          <p className="text-4xl md:text-5xl font-bold mb-4">Color choise</p>
          <p className="text-base sm:text-md md:text-lg leading-relaxed ">
            This app uses a clean and modern color scheme consisting of dark
            gray, gray, white, and green. The dark gray and gray tones provide a
            neutral, low-distraction background that enhances readability and
            reduces eye strain, especially in low-light environments. White is
            used strategically for clarity and contrast, ensuring that content
            stands out. Green serves as the primary accent color, guiding user
            attention to key actions and reinforcing a sense of progress and
            positivity. This balanced palette supports both usability and a
            sleek visual identity.
          </p>
        </div>
        <div className="ContainerGymApp3Right mt-12 lg:mt-0 flex justify-center items-center w-full lg:w-1/2">
          <div className="GymAppColorchoise3 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-md p-6 rounded-3xl shadow-2xl text-zinc-950 bg-gray-100 border-2 border-gray-400">
            {[
              { color: "#ffffff", label: "Text" },
              { color: "#212121", label: "Background" },
              { color: "#45b622", label: "Primary" },
              { color: "#404040", label: "Secondary" },
              { color: "#505050", label: "Background.2" },
              { color: "#746f35", label: "Accent" },
            ].map((box, i) => (
              <div
                key={i}
                className={`my-5 h-20 w-20 mx-auto rounded-sm relative`}
                style={{ backgroundColor: box.color }}
              >
                <p className="text-xs absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                  {box.color}
                </p>
                <p className="text-xs absolute -top-5 left-1/2 transform -translate-x-1/2">
                  {box.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="projectPageContainer4 mt-10 flex flex-col lg:flex-row justify-around items-center w-full min-h-[60vh]">
        {/* Venstre seksjon */}

        <div className="GymAppColorchoise3 mt-15 mr-15 ml-15 flex flex-col justify-start items-center bg-gray-100 border-2 border-gray-400 p-4 rounded-3xl shadow-2xl w-1/2 max-w-3xl ">
          <p className="text-5xl font-bold p-2">Fonts</p>
          <p className="font-bold text-4xl p-4">Title 32px Bold Type: Inter</p>
          <p className="text-2xl p-2">Body 18px Regular/Bold</p>
          <p className="text-lg p-4">Small 14px Regular</p>
        </div>

        {/* Høyre seksjon */}
        <div className="ContainerGymApp4Righ my-15 ml-15 mr-5 w-full lg:w-1/2 max-w-2xl text-center lg:text-left px-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Font choise
          </p>
          <p className="text-base sm:text-md md:text-lg leading-relaxed">
            I chose Play and Roboto for their clean, modern look that fits the
            active, energetic vibe of a fitness app. Play adds a slightly sporty
            and dynamic feel with its angular shapes, while Roboto ensures
            readability and a sleek, professional look across all screens.
            Together, they create a balanced, athletic aesthetic that's both
            motivating and user-friendly.
          </p>
        </div>
      </div>
      <ImageTest />
      <ImageCarusel />
      <Footer />
    </div>
  );
}
