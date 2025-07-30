"use client";

import React from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { MapPin } from "lucide-react";
import HoneyComb from "../components/atoms/HexBackground";
import TTT from "../TicTacToe/page";

export default function FrontPageMobile() {
  return (
    <div className="FrontPageContainer relative flex justify-center items-center min-h-screen max-w-screen-9xl mx-auto overflow-hidden">
      {/*Background*/}
      <div className="absolute left-[-400px] top-0 h-screen w-full z-0">
        <HoneyComb />
      </div>

      {/*Mobil layout*/}
      <div className="block md:hidden flex-col z-10">
        {/*MainContent*/}
        <div className="h-[70vh] w-[85vw] bg-purple-950 grid grid-cols-16 grid-rows-32">
          {/*Topp email and sosials icons*/}
          <div className="col-span-16 row-start-2 row-span-2 my-auto bg-gray-200">
            <div className="z-15 pl-4 h-6 w-56 my-auto bg-amber-500">
              Stiankarlsen709@gmail.com
            </div>
          </div>
          {/*Separating line*/}
          <div className="h-1 w-full col-span-14 col-start-2 row-start-4 bg-stone-300"></div>
          {/*Image Me*/}
          <div className="">
            <img src="" alt="Image of me" className=""></img>
          </div>
        </div>
        {/*TechStack*/}
        <div className="h-20 w-10 mx-1 bg-purple-700"></div>
      </div>

      {/*PC layout*/}
      <div className="hidden md:block"></div>
    </div>
  );
}
