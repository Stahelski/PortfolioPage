"use client";

import React from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { MapPin } from "lucide-react";
import HoneyComb from "../components/atoms/HexBackground";

export default function FrontPageMobile() {
  const kopier = async () => {
    try {
      await navigator.clipboard.writeText("Stiankarlsen709@gmail.com");
      toast.success("Email copied");
    } catch (err) {
      console.log(err.message);
      toast.error("Failed to copy Email");
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

  return (
    <div className="FrontPageContainer relative flex justify-center items-center min-h-screen max-w-screen-9xl mx-auto overflow-hidden">
      {/*Background*/}
      <div className="absolute left-[-400px] top-0 h-screen w-full z-0">
        <HoneyComb />
      </div>

      {/*Mobil layout*/}
      <div className="block md:hidden flex-col z-10">
        {/*MainContent*/}
        <div className="h-[99vh] w-[85vw] rounded-lg grid grid-cols-12 grid-rows-16">
          {/*Topp email and sosials icons*/}
          <div className="col-span-12 pl-4 row-start-1 pt-4 flex items-center justify-between gap-x-1">
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 col-start-2 text-sky-400" />
              <a className="mt-2 pl-2 text-stone-300">Norway</a>
            </div>
            <div className="pr-4 flex items-center justify-center">
              <a
                className="cursor-pointer h-6 w-6 mr-4 bg-sky-900 hover:bg-sky-700 rounded-full flex justify-center items-center "
                href="https://github.com/Stahelski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Github.svg"
                  alt="github logo"
                  className="h-4.5"
                ></img>
              </a>
              <a
                className="cursor-pointer h-6 w-6 bg-sky-900 hover:bg-sky-700 rounded-full flex justify-center items-center "
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-brands-solid.svg"
                  alt="linkedIn logo"
                  className="h-4.5"
                ></img>
              </a>
            </div>
          </div>
          {/*Separating line*/}
          <div className="h-0.5 mt-0.5 col-start-1 col-span-12 row-start-2 bg-stone-300"></div>
          {/*Image Me*/}
          <div className="pl-4 col-start-1 col-span-7 row-start-3">
            <img
              src="/ImgMe.jpg"
              alt="Image of me"
              className="rounded-sm"
            ></img>
          </div>
          {/*Project/About/Tic Tac Toe*/}
          <div className="col-start-8 col-span-5 row-span-4 flex flex-col space-y-4">
            <a
              href="/ProjectPage"
              className="pl-3 mx-4 h-12 flex justify-start items-center bg-sky-950 text-stone-300 text-lg rounded-md border border-sky-300 active:bg-sky-900 active:border-sky-400 transition-colors group shadow-sm"
            >
              Projects
            </a>

            <a
              href="/aboutPage"
              className="pl-3 mx-4 h-12 flex justify-start items-center bg-sky-950 text-stone-300 text-lg rounded-md border border-sky-300 active:bg-sky-900 active:border-sky-400 transition-colors group shadow-sm"
            >
              About
            </a>

            <a
              href="/TicTacToe"
              className="pl-3 mx-4 h-12 flex justify-start items-center bg-sky-950 text-stone-300 text-lg rounded-md border border-sky-300 active:bg-sky-900 active:border-sky-400 transition-colors group shadow-sm"
            >
              TicTacTe
            </a>
          </div>
          {/*Email copy btn*/}
          <button
            onClick={kopier}
            className="col-start-1 col-span-12 row-start-7 pl-3 mx-4  h-12 flex justify-center items-center bg-sky-950 text-stone-300 text-lg rounded-md border border-sky-300 active:bg-sky-900 active:border-sky-400 transition-colors group shadow-sm"
          >
            Stiankarlsen709@gmail.com
            <img
              src="/copy_all_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
              alt="copy image"
              className="right-0 pl-0 md:pl-1.5 h-5 "
            ></img>
          </button>
          {/*Short text about me*/}
          <div className="col-start-1 col-span-12 row-start-8 h-16 mx-4 mt-2 bg-[#06000f] px-3 border border-sky-700 shadow-sm text-stone-300 rounded-md flex items-center">
            I'm Stian, a front-end developer with a focus on Next.js.
          </div>
          {/*TechStack*/}
          <div className="relative col-start-1 col-span-12 row-start-9 row-span-8 mt-8 mb-4 mx-4 rounded-md bg-[#06000f] px-3 border border-sky-700 shadow-sm text-stone-300">
            <a className="absolute left-0 text-stone-300 pl-4 pt-2">
              Tech stack
            </a>
            <div className="wrapper grid grid-cols-4 gap-4 mx-auto mt-14">
              {techStack.map((tech, index) => (
                <div key={index} className="h-16 w-16">
                  <img
                    src={tech.src}
                    alt={`${tech.alt} logo`}
                    className="h-15"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*PC layout*/}
      <div className="hidden md:block"></div>
    </div>
  );
}
