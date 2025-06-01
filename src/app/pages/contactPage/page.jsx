"use client";

import React from "react";
import Navbar from "@/app/components/organisms/Navbar";
import Footer from "@/app/components/organisms/Footer";

export default function contactPage() {
  return (
    <div className="h-screen w-screen text-gray-50 bg-zinc-600">
      <Navbar />
      <div className="ContactTopContainer bg-gray-900 w-screen h-100">
        <div className="TextTop bg-pink-500 h-50 w-50"></div>
        <div className="ImageMe bg-pink-500 h-50 w-50"></div>
      </div>

      <div className="TextEmailContainer bg-gray-700 w-screen h-50"></div>

      <div className="ContactContainer bg-stone-600 w-screen h-200">
        <div className="LeftPart bg-gray-700 h-100 w-50">
          <div className="bg-green-500 h-50 w-50"></div>
          <div className="bg-green-600 h-50 w-50"></div>
          <div className="bg-green-700 h-50 w-50"></div>
          <div className="bg-green-800 h-50 w-50"></div>
        </div>
        <div className="RightPart bg-gray-600 h-100 w-50">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
