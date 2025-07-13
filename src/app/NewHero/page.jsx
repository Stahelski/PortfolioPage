"use client";

import React from "react";
import Link from "next/link";
import HoneyComb from "../components/atoms/HexBackground";
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
    <div className="NewHero relative flex justify-center items-center min-h-screen max-w-screen-lg mx-auto">
      <div className="Background absolute left-[-100px] inset-0 z-[0]">
        <HoneyComb />
      </div>

      <div className="Elements bg-transparent z-[1] h-[65vh] w-[52vw] grid grid-cols-8 grid-rows-16 gap-3">
        <div className="AboutText bg-[#1f1d22] text-stone-200 rounded-md col-span-3 row-span-4 flex items-center pl-4">
          I'm Stian, a front-end web developer located in Norway.
        </div>

        <div className="TechStack bg-[#1f1d22] rounded-md px-1 row-start-5 col-span-3 row-span-9 grid grid-cols-4 grid-rows-7 gap-0">
          <div className="bg-[#1f1d22] text-stone-200 rounded-md col-span-4 flex items-center pl-2 pt-2">
            Tech stack
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/react-original.svg"
              className="h-11"
              alt="React logo"
            ></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/nextjs-original.svg"
              className="h-11"
              alt="Next.js logo"
            ></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/javascript-original (1).svg"
              className="h-11"
              alt="Javascript logo"
            ></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/nodejs-original-wordmark.svg"
              className="h-11"
              alt="Node.js logo"
            ></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/html5-original.svg"
              className="h-11"
              alt="HTML logo"
            ></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img src="/css3-original.svg" className="h-11" alt="CSS logo"></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img src="/git-original.svg" className="h-11" alt="Git logo"></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img src="/Github.svg" className="h-11" alt="Github logo"></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/tailwindcss-original.svg"
              className="h-11"
              alt="Tailwindcss logo"
            ></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/figma-original.svg"
              className="h-11"
              alt="Figma logo"
            ></img>
          </div>
          <div className="row-span-2 flex justify-center items-center">
            <img
              src="/sqlite-original.svg"
              className="h-11"
              alt="SQLite logo"
            ></img>
          </div>
        </div>

        <div className="Email bg-[#1f1d22] text-stone-200 rounded-md row-start-14 row-end-16 col-span-3 flex items-center pl-2">
          Stiankarlsen709@gmail.com
        </div>
        <div className="containerRight bg-[#1f1d22] rounded-md ml-2 col-span-5 col-start-4 row-span-15 grid grid-cols-10 grid-rows-10">
          <div className="col-span-10"></div>
          <div className="Contact bg-[#510fa5] text-stone-200 my-2 row-start-2 col-start-2 col-end-4 rounded-md flex justify-center items-center">
            Contact
          </div>
          <div className="WhiteLine row-start-3 col-start-2 col-end-10 flex items-center">
            <div className="bg-stone-200 h-[2px] w-full"></div>
          </div>
          <div className="Image row-start-4 row-end-8 col-start-2 col-end-6 flex justify-center items-center">
            <img
              src="/ImgMe.jpg"
              className="w-full rounded-md"
              alt="Image of me"
            ></img>
          </div>

          <div className="SosialIcons  bg-[#1f1d22] row-start-2 col-start-8 col-end-10 flex justify-around items-center">
            <div className="h-6 w-6 bg-[#510fa5] rounded-4xl flex justify-center items-center">
              <img
                src="/linkedin-brands-solid.svg"
                className="h-4"
                alt="Linkedin logo"
              ></img>
            </div>
            <div className="h-6 w-6 bg-[#510fa5] rounded-4xl flex justify-center items-center">
              <img src="/Github.svg" className="h-4" alt="Github logo"></img>
            </div>
          </div>

          <div className="Projects bg-[#100f14] text-stone-200 rounded-md row-start-4 col-start-6 col-end-10 ml-2 pr-2 flex justify-end items-center">
            Projects
          </div>
          <div className="About bg-[#1f1d22] row-start-5 row-span-2 col-start-6 col-end-10 ml-2 flex items-center">
            <div className="bg-[#100f14] text-stone-200 rounded-md w-full h-[50%] flex items-center pl-2">
              About
            </div>
          </div>
          <div className="TickTackToe bg-[#100f14] text-stone-200 rounded-md row-start-7 col-start-6 col-end-10 ml-2 pr-2 flex justify-end items-center">
            Tick Tack Toe
          </div>

          <div className=" row-start-9 col-start-2 col-end-7"></div>

          <div className="GymFoodCode bg-[#1f1d22] text-stone-200 pb-1 row-start-10 col-start-2 col-end-7 flex justify-between items-center">
            <div className=" w-15 h-10 flex items-center justify-center">
              Gym
              <img src="/GymHeart.png" className="h-5 pl-1" alt="Heart"></img>
            </div>
            <div className=" w-15 h-10 pl-6 flex items-center justify-center">
              Food
              <img src="/FoodHeart.png" className="h-5 pl-1" alt="Heart"></img>
            </div>
            <div className=" w-15 h-10 pl-10 flex items-center justify-center">
              Code <img src="/Heart.png" className="h-5 pl-1" alt="Heart"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
