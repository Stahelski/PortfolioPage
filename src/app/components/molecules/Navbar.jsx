"use client";

import React from "react";
import Link from "next/link";
import css from "../../globals.css";

export default function Navbar() {
  return (
    // Alle små komponenter som Button, Navbar, Sidebar, kan bruke h-[dvh/dvw]. Og større komponenter som div imageConfigDefault, bruk heller h-[%]
    <>
      <div className="Navbar z-[5] h-[7.8dvh] w-fill flex justify-around items-center  rounded-[27px_27px_0_0] ">
        <div className="sm:text-[4dvh] sm:ml-5 lg:text-[6dvh]">
          FrontendForge
        </div>
        <div className="flex gap-21">
        <Link
          href="/contactPage"
          className="cursor-pointer text-xl sm:text-3xl md:text-5xl"
        >
          Contact
        </Link>
        <Link
          href="/aboutPage"
          className="cursor-pointer text-xl sm:text-3xl md:text-5xl"
        >
          About
        </Link>
        </div>
      </div>
    </>
  );
}

