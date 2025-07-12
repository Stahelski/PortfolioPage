"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Coffee,
  Code,
  Heart,
} from "lucide-react";

export default function NewHero() {
  return (
    <div className="NewHero flex justify-center items-center min-h-screen max-w-screen-lg mx-auto">
      <div className="bg-purple-500 h-[75vh] w-[60vw] grid grid-cols-8 grid-rows-7 gap-3">
        <div className="bg-purple-400 col-span-3 row-span-2 flex items-center pl-4">
          I'm Stian, a front-end developer located in Norway.
        </div>

        <div className="bg-purple-300 row-start-3 col-span-3 row-span-4 grid grid-cols-4 grid-rows-8 gap-0">
          <div className="bg-zinc-400 col-span-4 flex items-center l-4">
            Tech stack
          </div>
          <div className="bg-zinc-600 row-span-2"></div>
          <div className="bg-zinc-700 row-span-2"></div>
          <div className="bg-zinc-800 row-span-2"></div>
          <div className="bg-zinc-600 row-span-2"></div>
          <div className="bg-zinc-700 row-span-2"></div>
          <div className="bg-zinc-800 row-span-2"></div>
          <div className="bg-zinc-600 row-span-2"></div>
          <div className="bg-zinc-700 row-span-2"></div>
          <div className="bg-zinc-800 row-span-2"></div>
          <div className="bg-zinc-600 row-span-2"></div>
          <div className="bg-zinc-700 row-span-2"></div>
          <div className="bg-zinc-800 row-span-2"></div>
          <div className="bg-zinc-400 row-start-8 col-span-4"></div>
        </div>

        <div className="bg-purple-700 row-start-7 col-span-3 flex items-center pl-4">
          Stiankarlsen709@gmail.com
        </div>
        <div className="bg-purple-900 ml-2 col-span-5 col-start-4 row-span-7 grid grid-cols-10 grid-rows-10">
          <div className="bg-blue-600 col-span-10"></div>
          <div className="bg-blue-700 row-start-2 col-start-2 col-end-5"></div>
          <div className="bg-blue-800 row-start-3 col-start-2 col-end-10"></div>
          <div className="bg-blue-900 row-start-4 row-end-8 col-start-2 col-end-6"></div>
          <div className="bg-blue-900 row-start-9 col-start-2 col-end-7 flex items-center">
            Gym
          </div>

          <div className="bg-blue-700 row-start-2 col-start-8 col-end-10"></div>

          <div className="bg-blue-900 row-start-4 col-start-6 col-end-10 ml-2 pr-2 flex justify-end items-center">
            Projects
          </div>
          <div className="bg-blue-500 row-start-5 row-span-2 col-start-6 col-end-10 ml-2 flex items-center">
            <div className="bg-amber-50 w-full h-[50%] flex items-center pl-2">
              About
            </div>
          </div>
          <div className="bg-blue-600 row-start-7 col-start-6 col-end-10 ml-2 pr-2 flex justify-end items-center">
            Tick Tack Toe
          </div>

          <div className="bg-blue-500 row-start-10 col-span-10"></div>
        </div>
      </div>
    </div>
  );
}
