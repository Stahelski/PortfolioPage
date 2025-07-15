"use client";

import React from "react";
import HoneyComb from "../components/atoms/HexBackground";

export default function NewHero() {
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

  const socialIcons = [
    { src: "/linkedin-brands-solid.svg", alt: "LinkedIn" },
    { src: "/Github.svg", alt: "GitHub" },
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
      <div className="z-10 h-[65vh] w-[52vw] grid grid-cols-8 grid-rows-16 gap-3">
        {/* About Text */}
        <div className="col-span-3 row-span-4 bg-[#1f1d22] text-stone-200 rounded-md flex items-center pl-4">
          I'm Stian, a front-end web developer located in Norway.
          <div className="h-5 w-11 mt-4 mr-2 rounded-full bg-blue-700">
            <img
              src="/chevron_right_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
              alt="next button"
              className="ml-0.5"
            ></img>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-3 row-start-5 row-span-9 bg-[#1f1d22] rounded-md px-1 grid grid-cols-4 grid-rows-7 gap-0">
          <div className="col-span-4 flex items-center text-stone-200 pl-2 pt-2">
            Tech stack
          </div>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="row-span-2 flex justify-center items-center"
            >
              <img src={tech.src} alt={`${tech.alt} logo`} className="h-11" />
            </div>
          ))}
        </div>

        {/* Email */}
        <div className="col-span-3 row-start-14 row-end-16 bg-[#1f1d22] text-stone-200 rounded-md flex items-center pl-2">
          Stiankarlsen709@gmail.com
        </div>

        {/* Right Side Content */}
        <div className="col-span-5 col-start-4 row-span-15 bg-[#1f1d22] rounded-md grid grid-cols-10 grid-rows-10">
          {/* Spacer */}
          <div className="col-span-10" />

          {/* Contact */}
          <div className="row-start-2 col-start-2 col-end-4 bg-blue-700 text-stone-200 rounded-md flex justify-center items-center my-2">
            Contact
          </div>

          {/* Line Divider */}
          <div className="row-start-3 col-start-2 col-end-10 flex items-center">
            <div className="bg-stone-200 h-[2px] w-full" />
          </div>

          {/* Image */}
          <div className="row-start-4 row-end-8 col-start-2 col-end-6 flex justify-center items-center">
            <img
              src="/ImgMe.jpg"
              alt="Image of me"
              className="w-full rounded-md"
            />
          </div>

          {/* Social Icons */}
          <div className="row-start-2 col-start-8 col-end-10 flex justify-around items-center bg-[#1f1d22]">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="h-6 w-6 bg-blue-700 rounded-full flex justify-center items-center"
              >
                <img src={icon.src} alt={`${icon.alt} logo`} className="h-4" />
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="row-start-4 col-start-6 col-end-10 ml-2 pr-2 bg-[#100f14] text-stone-200 rounded-md flex justify-end items-center">
            Projects
          </div>

          {/* About Box */}
          <div className="row-start-5 row-span-2 col-start-6 col-end-10 ml-2 flex items-center">
            <div className="w-full h-[50%] bg-[#100f14] text-stone-200 rounded-md flex items-center pl-2">
              About
            </div>
          </div>

          {/* Tic Tac Toe */}
          <div className="row-start-7 col-start-6 col-end-10 ml-2 pr-2 bg-[#100f14] text-stone-200 rounded-md flex justify-end items-center">
            Tick Tack Toe
          </div>

          {/* Spacer */}
          <div className="row-start-9 col-start-2 col-end-7" />

          {/* Lifestyle Icons */}
          <div className="row-start-10 col-start-2 col-end-7 text-stone-200 flex justify-between items-center pb-1">
            {lifestyle.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:space-x-0 xl:space-x-2"
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
