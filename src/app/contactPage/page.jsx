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

      <div className="ContactPageCard h-2/3 w-5/9 z-[5] mt-12 flex flex-col bg-white/5 backdrop-blur-sm">
        <ContactNavbar />
        {/* <form>: Selve skjemaet. action angir hvor dataene skal sendes, og method="POST" brukes for å sende data sikkert. */}
        <form
          className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-6"
          action="/send-message"
          method="POST"
        >
          <div className="Left w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
            <div className="NameFeeld w-full ml-5 flex justify-center sm:justify-end items-center">
              <img className="h-8 w-8 mr-1" src="/user.png" alt="user icon" />
              <input
                className="Name w-64 h-8 text-amber-50 border-b-2 border-white outline-none pt-3"
                type="text"
                id="name"
                placeholder="Name:"
                required
              ></input>
            </div>

            <div className="EmailFeeld w-full h-30 ml-5 flex justify-center sm:justify-end items-center">
              <img className="w-8 h-8 mr-1" src="/Epost.svg" alt="email icon" />
              <input
                className="Email w-64 h-8 text-amber-50 border-b-2 border-white outline-none pt-3"
                type="email"
                id="email"
                name="email"
                placeholder="Email:"
                required
              ></input>
            </div>

            <div className="PhoneFeeld w-full ml-5 flex justify-center sm:justify-end items-center gap-4">
              <img className="w-8 h-8 mr-1" src="/phone.png" alt="phone icon" />
              <input
                className="Phone w-64 h-8 text-amber-50 border-b-2 border-white outline-none pt-3"
                type="num"
                id="phone"
                name="phone"
                placeholder="Phone:"
              ></input>
            </div>
          </div>

          <div className="Right w-full sm:w-1/2 h-full m-10 flex flex-col items-end justify-center">
            <textarea
              className="w-full h-60 p-2 mt-[8%] text-white bg-white/25 rounded-2xl outline-none"
              id="message"
              name="message"
              placeholder="Message.."
              required
            ></textarea>

            <button
              className="cursor-pointer px-6 py-2 m-2 bg-white/25 hover:bg-white/40 text-white rounded-[0_27px_27px_27px] transition"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <HeroBG />
    </div>
  );
}
