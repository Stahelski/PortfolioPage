"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/app/components/organisms/Footer";

export default function contactPage() {
  return (
    <div className="ContactPageContainer min-h-screen">
      {/* mx-auto for å sentrere */}
      <div className="ContactPageNavbar mx-auto mt-7 mb-5 h-[10dvh] w-[95dvw] rounded-[27px] flex justify-around items-center">
        <Link href="/" className="cursor-pointer text-[6dvh]">
          FrontendForge
        </Link>
        <Link href="/contactPage" className="cursor-pointer text-[6dvh]">
          Contact
        </Link>
      </div>
      <div className="ContactTopContainer h-[60dvh] w-screen flex justify-around items-end">
        <div className="TextTop bg-transparent font-bold text-[50px] mb-10 h-50 w-50">
          Contact
          <div className="AboutTextLine h-[1px] w-[25dvw]"></div>
        </div>

        <img
          src="/MEEEEEE2 – Kopi.png"
          className="ImageMe h-[55dvh] w-auto"
        ></img>
      </div>

      <div className="TextEmailContainer w-screen h-[15dvh] pt-10 text-[50px] pl-45 flex justify-start items-center">
        Send me an email
      </div>

      <div className="ContactContainer w-screen h-[60dvh] flex justify-center items-start">
        <div className="LeftPart h-[50dvh] w-[50dvw] flex flex-col items-center">
          <div className="mr-40 mt-2 h-[6dvh] flex justify-center items-center">
            Name
          </div>
          <input className="InputContactPage ml-30 h-[8dvh] w-[30dvw]"></input>

          <div className="mr-40 mt-10 h-[6dvh] flex justify-center items-center">
            Email
          </div>
          <input className="InputContactPage ml-30 h-[8dvh] w-[30dvw]"></input>
        </div>
        <div className="RightPart h-[60dvh] w-[50dvw]">
          <div className="ml-8 mt-2 h-[6dvh] w-20 flex justify-center items-center">
            Message
          </div>
          <textarea className="InputContactPage h-[29dvh] w-[40dvw]"></textarea>
        </div>
      </div>
      <Footer />
    </div>
  );
}
