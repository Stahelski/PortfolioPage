"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/app/components/organisms/Footer";
import ContactNavbar from "./ContactNavbar";
import HeroBG from "../components/atoms/HeroBG";

export default function contactPage() {
  return (
    <div className="ContactPageContainer relative z-[1] h-[60dvh] sm:h-screen w-screen flex flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-4 mx-auto sm:left-8 text-[#F5C19A] text-4xl z-5"
      >
        <h1>FrontendForge</h1>
      </Link>

      <div className="ContactPageCard h-2/3 w-3/4 z-[5] mt-12 flex flex-col bg-white/5 backdrop-blur-sm">
        <ContactNavbar />
        {/* <form>: Selve skjemaet. action angir hvor dataene skal sendes, og method="POST" brukes for å sende data sikkert. */}
        <form
          className="w-full h-full flex justify-center items-center"
          action="/send-message"
          method="POST"
        >
          <div className="Left bg-transparent w-1/2 flex flex-col">
            <div className="NameFeeld flex justify-start items-center">
              <img className="h-8 w-8 mr-1" src="/user.png" alt="user icon" />
              <input
                className="Name w-20 h-8 text-amber-50 bg-transparent border-b-2 border-white outline-none pt-3"
                type="text"
                id="name"
                placeholder="Name:"
                required
              ></input>
            </div>

            <div className="EmailFeeld flex justify-start items-center">
              <img className="w-8 h-8 mr-1" src="/Epost.svg" alt="email icon" />
              <input
                className="Email w-20 h-8 text-amber-50 bg-transparent border-b-2 border-white outline-none pt-3"
                type="email"
                id="email"
                name="email"
                placeholder="Email:"
                required
              ></input>
            </div>

            <div className="PhoneFeeld flex justify-start items-center">
              <img className="w-8 h-8 mr-1" src="/phone.png" alt="phone icon" />
              <input
                className="Phone w-20 h-8 text-amber-50 bg-transparent border-b-2 border-white outline-none pt-3"
                type="num"
                id="phone"
                name="phone"
                placeholder="Phone:"
              ></input>
            </div>
          </div>

          <div className="w-1/2 h-1/1 flex flex-col items-center justify-center">
            <textarea
              className="Right w-5/6 h-1/2 p-2 text-white bg-white/25 rounded-2xl outline-none"
              id="message"
              name="message"
              placeholder="Message.."
              required
            ></textarea>

            <button className="top-17 right-12 text-white" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>

      <HeroBG />
    </div>
  );
}
