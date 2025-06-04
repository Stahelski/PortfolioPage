"use client";

import React from "react";
import css from "../../globals.css";

export default function ProjectSection() {
  return (
    <>
      <div className="ProjectSectionContainer h-[80dvh] flex justify-center items-center">
        <div className="ProjectImageContainer md:h-[46vh] lg:h-[60vh] w-[60dvw] flex justify-center items-center">
          <div className="ProjectImageGraybox md:h-[40vh] lg:h-[51vh] w-[55dvw] p-5">
            <img
              src="/GymAppImg1.png"
              className="GymAppImg1 w-[21dvw] rounded-lg z-[5] relative md:top-[20vh]  lg:top-[21vh]     right-[0dvw]"
            />
            <img
              src="/GymAppImg2.png"
              className="GymAppImg2 w-[21dvw] rounded-lg z-[4] relative md:bottom-[9vh] lg:bottom-[22vh]  left-[15dvw]"
            />
            <img
              src="/GymAppImg3.png"
              className="GymAppImg3 w-[21dvw] rounded-lg z-[3] relative md:bottom-[42vh] lg:bottom-[66vh]  left-[30.5dvw]"
            />
          </div>
        </div>
        <div className="ProjectText w-[30dvw] h-[60dvh] pl-[2dvw] pr-[10dvw] pt-[5dvh] flex justify-center items-top">
          This was my first ever mobile/web app design. Taken inspiration from
          one of my favorite exercise apps. It combines a professional design,
          simple and straight to the point. with cutting edge AI system to help
          you stay on track and push your limits in a scientific way! It wil
          help you plan your messo and strive fore new goals!
        </div>
      </div>
    </>
  );
}
