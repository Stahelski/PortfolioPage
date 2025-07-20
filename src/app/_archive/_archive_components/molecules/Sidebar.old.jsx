"use client";

import React from "react";
import css from "../../globals.css";

import RBM from "../atoms/RoundBtnMail";
import RBG from "../atoms/RoundBtnGithub";
import RBA from "../atoms/RoundBtnArtstation";

export default function Sidebar() {
  return (
    // Alle små komponenter som Button, Navbar, Sidebar, kan bruke h-[dvh/dvw]. Og større komponenter som div imageConfigDefault, bruk heller h-[%]
    <>
      <div className="SidebarContainer relative">
        <div className="Sidebar z-[2] opacity-100 absolute top-[-7.8dvh] h-[75dvh] sm:w-[6dvw] lg:w-[3.8dvw] rounded-[27px_0_0_27px] flex flex-col justify-around items-center">
          <RBM />
          <RBG />
          <RBA />
        </div>
      </div>
    </>
  );
}
//   <div className="SidebarContainer relative">
//     <div className="Sidebar z-[2] opacity-100 absolute top-[-7.8dvh] w-[3.8dvw] h-[75dvh] rounded-[27px_0_0_27px] flex flex-col justify-around items-center"></div>
