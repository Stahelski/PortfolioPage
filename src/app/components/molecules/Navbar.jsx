"use client";

import React from "react";
import Link from "next/link";
import css from "../../globals.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar z-[2] flex justify-around items-center h-[7.8dvh] rounded-[27px_27px_0_0] w-fill">
        <div className="text-[6dvh]">FrontendForge</div>
        <Link href="/contactPage" className="cursor-pointer text-[6dvh]">
          Contact
        </Link>
      </div>
    </>
  );
}
