"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="FooterContainer h-[12dvh] flex justify-around items-center">
        <div className="2025 mr-80">© 2025</div>
        <div className="CAContainer flex justify-around items-center ml-80 text-zinc-950">
          <Link href="/contactPage">
            <p>Contact</p>
          </Link>
          <Link href="/aboutPage">
            <p className="pl-15">About</p>
          </Link>
        </div>
      </div>
    </>
  );
}
