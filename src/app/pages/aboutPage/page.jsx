"use client";

import Footer from "@/app/components/organisms/Footer";
import Navbar from "@/app/components/organisms/Navbar";
import React from "react";

export default function aboutPage() {
  return (
    <div className="h-screen w-screen text-gray-50 bg-[#b2afbf]">
      <Navbar />
      <div className="AboutTopContainer flex justify-around items-center bg-gray-500 h-100 w-screen">
        <div className="AboutText bg-pink-600 h-50 w-50"></div>
        <div className="ImageMe bg-pink-500 h-50 w-50"></div>
      </div>
      <div className="AboutMidContainer flex justify-around items-center bg-gray-600 h-100 w-screen">
        <div className="ImgContainer1 bg-green-500 h-50 w-50"></div>
        <div className="ImgContainer2 bg-green-600 h-50 w-50"></div>
        <div className="ImgContainer3 bg-green-700 h-50 w-50"></div>
        <div className="ImgContainer4 bg-green-800 h-50 w-50"></div>
      </div>
      <div className="AboutBottomContainer flex justify-around items-center bg-gray-800 h-100 w-screen">
        <div className="RandomImage bg-purple-500 h-50 w-50"></div>
        <div className="RandomFacts bg-purple-600 h-50 w-50"></div>
      </div>
      <Footer />
    </div>
  );
}