"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="FooterContainer h-[12dvh] w-screen flex justify-around items-center">
        <div className="2025 mr-80">© 2025</div>
        <div className="CAContainer ml-80 flex justify-around items-center">
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
