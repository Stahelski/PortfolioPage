"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="FooterContainer w-full h-[8dvh] sm:h-[12dvh] flex justify-around sm:justify-between items-center sm:px-20 text-zinc-950">
        <div className="2025 text-sm md:text-lg">© 2025</div>
        <div className="CAContainer gap-20 flex justify-around items-start sm:ml-80 text-sm md:text-lg">
          <Link href="/contactPage">
            <p className="cursor-pointer">Contact</p>
          </Link>
          <Link href="/aboutPage">
            <p className="cursor-pointer">About</p>
          </Link>
        </div>
      </div>
    </>
  );
}
