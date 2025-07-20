"use client";

import React from "react";
import Link from "next/link";
import css from "../../_archive_global.css";

export default function Navbar() {
  return (
    // Alle små komponenter som Button, Navbar, Sidebar, kan bruke h-[dvh/dvw]. Og større komponenter som div imageConfigDefault, bruk heller h-[%]
    <>
      <div className="Navbar z-[5] h-[7.8dvh] w-full flex justify-around items-center md:px-38 rounded-[27px_27px_0_0] ">
        {/* <Link
          href="/"
          className="cursor-pointer text-md sm:text-2xl md:text-3xl xl:text-4xl"
        >
          Pricing
        </Link> */}

        <Link
          href="/contactPage"
          className="cursor-pointer text-md sm:text-2xl md:text-3xl xl:text-4xl"
        >
          Contact
        </Link>
        <Link
          href="/aboutPage"
          className="cursor-pointer text-md sm:text-2xl md:text-3xl xl:text-4xl"
        >
          About
        </Link>

        <a
          href="https://github.com/Stahelski"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-md sm:text-2xl md:text-3xl xl:text-4xl"
        >
          Github
        </a>
      </div>
    </>
  );
}
