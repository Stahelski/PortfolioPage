"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/app/components/organisms/Footer";
import ContactNavbar from "./ContactNavbar";

export default function contactPage() {
  return (
    <div className="ContactPageContainer min-h-screen">
      {/* mx-auto for å sentrere */}

      <ContactNavbar />
      <div className="ContactTopContainer h-[40dvh] w-full flex flex-col md:flex-row justify-around items-cente px-4 py-10 gap-6">
        <div className="TextTop bg-transparent font-bold text-2xl md:text-6xl flex items-center">
          Contact
        </div>
      </div>

      <div className="TextEmailContainer w-screen h-[15dvh] pt-10 text-[6vw] md:text-[40px] pl-45 flex justify-start items-center">
        Send me an email
      </div>

      <div className="ContactContainer w-[80vw] h-[60dvh] flex flex-col md:flex-row justify-center items-start mx-auto px-6 gap-8 pb-16">
        <div className="LeftPart w-full md:w-1/2 flex flex-col items-start">
          <div className="mt-2 text-lg font-semibold">Name</div>
          <input className="InputContactPage w-full p-3 mt-2 border border-gray-300 rounded"></input>

          <div className="mt-8 text-lg font-semibold">Email</div>
          <input className="InputContactPage w-full p-3 mt-2 border border-gray-300 rounded"></input>
        </div>
        <div className="RightPart w-full md:w-1/2">
          <div className="mt-2 text-lg font-semibold">Message</div>
          <textarea className="InputContactPage InputContactPage w-full h-60 p-3 mt-2 border border-gray-300 rounded resize-none"></textarea>
        </div>
      </div>
      <Footer />
    </div>
  );
}
