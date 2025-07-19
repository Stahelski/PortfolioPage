"use client";

import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { MapPin } from "lucide-react";
import HoneyComb from "../components/atoms/HexBackground";

export default function NewHero() {
  const kopier = async () => {
    try {
      await navigator.clipboard.writeText("Stiankarlsen709@gmail.com");
      toast.success("Email copied");
    } catch (err) {
      console.log(err.message);
      toast.error("Failed to copy email");
    }
  };

  const techStack = [
    { src: "/react-original.svg", alt: "React" },
    { src: "/nextjs-original.svg", alt: "Next.js" },
    { src: "/javascript-original (1).svg", alt: "JavaScript" },
    { src: "/nodejs-original-wordmark.svg", alt: "Node.js" },
    { src: "/html5-original.svg", alt: "HTML" },
    { src: "/css3-original.svg", alt: "CSS" },
    { src: "/git-original.svg", alt: "Git" },
    { src: "/Github.svg", alt: "GitHub" },
    { src: "/tailwindcss-original.svg", alt: "Tailwind CSS" },
    { src: "/figma-original.svg", alt: "Figma" },
    { src: "/sqlite-original.svg", alt: "SQLite" },
  ];

  const lifestyle = [
    { label: "Gym", icon: "/GymHeart.png" },
    { label: "Food", icon: "/FoodHeart.png" },
    { label: "Code", icon: "/Heart.png" },
  ];

  return (
    <div className="NewHero relative flex justify-center items-center min-h-screen max-w-screen-9xl mx-auto overflow-hidden">
      {/* Background */}
      <div className="absolute left-[-400px] top-0 h-screen w-full z-0">
        <HoneyComb />
      </div>

      {/* Main Content Grid */}
      <div className="z-10 h-[65vh] w-[52vw] grid grid-cols-7 grid-rows-16 gap-3">
        {/* About Text */}
        <div className="col-span-3 row-span-4 bg-[#1f1d22] text-stone-300 rounded-md flex items-center pr-2 pl-4">
          I'm Stian, a front-end developer with a focus on React and Next.js.
        </div>

        {/* Tech Stack */}
        <div className="col-span-3 row-start-5 row-span-9 bg-[#1f1d22] rounded-md px-1 grid grid-cols-4 grid-rows-7 gap-0">
          <div className="col-span-4 flex items-center text-stone-300 pl-2 pt-2">
            Tech stack
          </div>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="row-span-2 flex justify-center items-center transform hover:scale-112 transition-transform duration-75"
            >
              <img src={tech.src} alt={`${tech.alt} logo`} className="h-11" />
            </div>
          ))}
        </div>

        {/* Email */}
        <div className="relative col-span-3 row-start-14 row-end-16 justify-center bg-[#1f1d22] text-stone-300 rounded-md flex items-center pr-4">
          Stiankarlsen709@gmail.com
          <button
            className="absolute right-0 cursor-pointer transform hover:scale-112 transition-transform duration-75 "
            onClick={kopier}
          >
            <img
              src="/copy_all_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
              alt="copy image"
              className="right-0 pr-1 h-4 "
            ></img>
          </button>
        </div>
        <Toaster position="top-right" />

        {/* Right Side Content */}
        <div className="col-span-6 col-start-4 row-span-15 bg-[#1f1d22] rounded-md grid grid-cols-10 grid-rows-10">
          {/* Spacer */}
          <div className="col-span-10" />

          {/* Contact */}
          {/* <div className="row-start-2 col-start-2 col-end-4 bg-blue-700 text-stone-200 rounded-md flex justify-center items-center my-2">
            Contact
          </div> */}

          {/* Line Divider */}
          <div className="row-start-3 col-start-2 col-end-10 flex items-center">
            <div className="bg-stone-300 h-[2px] w-full" />
          </div>

          {/* Image */}
          <div className="relative row-start-4 row-end-8 col-start-2 col-end-6 mb-2 flex justify-center items-center group">
            <img
              src="/ImgMe.jpg"
              alt="Image of me"
              className="w-full rounded-md transition-opacity duration-125 opacity-100 group-hover:opacity-100 absolute"
            />
            {/*Image Hover*/}
            <img
              src="/ImgMeHover.jpg"
              alt="Image of me"
              className="w-full rounded-md transition-opacity duration-125 opacity-0 group-hover:opacity-100 absolute"
            />
          </div>

          <div className="relative row-start-2 col-start-2 col-end-10 mt-3 flex justify-end items-center bg-[#1f1d22]">
            <MapPin className="absolute left-0 mt-3 w-4 h-4 text-sky-400" />
            <a className="absolute left-6 mt-4 text-stone-300">Norway</a>
            <p
              className=" cursor-pointer h-6 w-6 mr-4 bg-sky-900 hover:bg-sky-700 rounded-full flex justify-center items-center transfor hover:scale-112 transition-transform duration-75"
              href="https://github.com/Stahelski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Github.svg" alt="github logo" className="h-4.5"></img>
            </p>
            <p
              className="cursor-pointer h-6 w-6 bg-sky-900 hover:bg-sky-700 rounded-full flex justify-center items-center transfor hover:scale-112 transition-transform duration-75"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin-brands-solid.svg"
                alt="linkedIn logo"
                className="h-4.5"
              ></img>
            </p>
          </div>

          {/* Projects */}

          <a
            className="cursor-pointer row-start-4 col-start-6 col-end-10 ml-2 m-1 pr-2 flex justify-end items-center bg-sky-950 text-stone-300 rounded-md border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
            href="/NewProjectPage"
          >
            Projects
          </a>

          {/* About Box */}
          <a
            className="cursor-pointer row-start-5 col-start-6 col-end-10 ml-2 m-1 pr-2 flex justify-end items-center bg-sky-950 text-stone-300 rounded-md border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
            href="/aboutPage"
          >
            About
          </a>
          {/* Tic Tac Toe */}
          <div className="cursor-pointer row-start-6 col-start-6 col-end-10 ml-2 m-1 pr-2 flex justify-end items-center bg-sky-950 text-stone-300 rounded-md border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm">
            Tick Tack Toe
          </div>

          {/* Spacer */}
          <div className="row-start-9 col-start-2 col-end-7" />

          {/* Lifestyle Icons */}
          <div className="row-start-10 col-start-2 col-end-7 text-stone-300 flex justify-between items-center pb-1">
            {lifestyle.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:space-x-0 xl:space-x-2 "
              >
                <span>{item.label}</span>
                <img src={item.icon} alt="Heart" className="lg:h-4 xl:h-5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
