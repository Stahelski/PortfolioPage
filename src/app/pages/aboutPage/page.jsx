"use client";

import Footer from "@/app/components/organisms/Footer";
import Navbar from "@/app/components/molecules/Navbar";
import React from "react";

export default function aboutPage() {
  return (
    <div className="h-screen w-screen text-gray-50 bg-[#b2afbf]">
      <Navbar />
      <div className="AboutTopContainer flex justify-around items-center bg-gray-500 h-100 w-screen">
        <div className="AboutText bg-pink-600 h-50 w-50">
          I'm a web developer, and I love what I do! Hello and welcome to my
          about page. Since you're here, you’re probably curious to learn more
          about me. ^^ I consider myself a bit of a Swiss Army knife in life —
          if there’s a problem, there’s a solution. It just takes time to find
          the right one sometimes. In general, I’m a calm and quiet person.
          Until you hit on one of my interests — then I light up. Haha. Some of
          my interests include: communication, web development (obviously),
          psychology, architecture, exercise, food and nutrition, design, and
          just learning in general. I’m not a pro in any of these topics, but I
          genuinely enjoy diving into them whenever I can.
        </div>
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
        <div className="RandomFacts bg-purple-600 h-50 w-50">
          I used to spend my spare time carving wood and making fine furniture —
          still love the smell of sawdust. I might have been a pretty solid Call
          of Duty player back in 2014. My favorite food, reheated chili con
          carne. I proudly embrace my inner couch potato on the weekends 🛋️
        </div>
      </div>
      <Footer />
    </div>
  );
}
