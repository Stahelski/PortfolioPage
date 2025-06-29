"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/app/components/organisms/Footer";
import ContactNavbar from "./ContactNavbar";
import HeroBG from "../components/atoms/HeroBG";

export default function contactPage() {
  return (
    <div className="ContactPageContainer relative z-[1] min-h-screen w-full flex flex-col items-center justify-center px-4 py-8">
      <Link
        href="/"
        className="absolute top-4 left-4 sm:left-8 text-[#F5C19A] text-2xl sm:text-4xl z-5"
      >
        <h1>FrontendForge</h1>
      </Link>

      <div className="ContactPageCard w-full max-w-6xl z-[5] mt-16 sm:mt-12 flex flex-col bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
        <ContactNavbar />

        <form
          className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-6 p-4 sm:p-6"
          action="/send-message"
          method="POST"
        >
          {/* Left side - Input fields */}
          <div className="Left w-full lg:w-1/2 flex flex-col justify-center items-center gap-6 py-4">
            <div className="NameField w-full max-w-sm flex justify-center items-center gap-2">
              <img
                className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0"
                src="/user.png"
                alt="user icon"
              />
              <input
                className="Name flex-1 h-10 sm:h-12 px-2 text-amber-50 bg-transparent border-b-2 border-white outline-none placeholder:text-amber-50/70"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="EmailField w-full max-w-sm flex justify-center items-center gap-2">
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                src="/Epost.svg"
                alt="email icon"
              />
              <input
                className="Email flex-1 h-10 sm:h-12 px-2 text-amber-50 bg-transparent border-b-2 border-white outline-none placeholder:text-amber-50/70"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="PhoneField w-full max-w-sm flex justify-center items-center gap-2">
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                src="/phone.png"
                alt="phone icon"
              />
              <input
                className="Phone flex-1 h-10 sm:h-12 px-2 text-amber-50 bg-transparent border-b-2 border-white outline-none placeholder:text-amber-50/70"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
            </div>
          </div>

          {/* Right side - Message and submit */}
          <div className="Right w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center gap-4 py-4">
            <textarea
              className="w-full max-w-sm lg:max-w-none h-40 sm:h-48 lg:h-60 p-3 text-white bg-white/25 rounded-2xl outline-none placeholder:text-white/70 resize-none"
              id="message"
              name="message"
              placeholder="Your message..."
              required
            />

            <button
              className="cursor-pointer px-6 py-3 bg-white/25 hover:bg-white/40 text-white rounded-[0_27px_27px_27px] transition-all duration-200 self-center lg:self-end"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <HeroBG />
    </div>
  );
}

// "use client";

// import React from "react";
// import Link from "next/link";
// import Footer from "@/app/components/organisms/Footer";
// import ContactNavbar from "./ContactNavbar";
// import HeroBG from "../components/atoms/HeroBG";

// export default function contactPage() {
//   return (
//     <div className="ContactPageContainer relative z-[1] h-[60dvh] sm:h-screen w-screen flex flex-col items-center justify-center">
//       <Link
//         href="/"
//         className="absolute top-4 mx-auto sm:left-8 text-[#F5C19A] text-4xl z-5"
//       >
//         <h1>FrontendForge</h1>
//       </Link>

//       <div className="ContactPageCard h-2/3 w-5/9 z-[5] mt-12 flex flex-col bg-white/5 backdrop-blur-sm">
//         <ContactNavbar />
//         {/* <form>: Selve skjemaet. action angir hvor dataene skal sendes, og method="POST" brukes for å sende data sikkert. */}
//         <form
//           className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-6"
//           action="/send-message"
//           method="POST"
//         >
//           <div className="Left w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
//             <div className="NameFeeld w-full ml-5 flex justify-center sm:justify-end items-center">
//               <img className="h-8 w-8 mr-1" src="/user.png" alt="user icon" />
//               <input
//                 className="Name w-64 h-8 text-amber-50 border-b-2 border-white outline-none pt-3"
//                 type="text"
//                 id="name"
//                 placeholder="Name:"
//                 required
//               ></input>
//             </div>

//             <div className="EmailFeeld w-full h-30 ml-5 flex justify-center sm:justify-end items-center">
//               <img className="w-8 h-8 mr-1" src="/Epost.svg" alt="email icon" />
//               <input
//                 className="Email w-64 h-8 text-amber-50 border-b-2 border-white outline-none pt-3"
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email:"
//                 required
//               ></input>
//             </div>

//             <div className="PhoneFeeld w-full ml-5 flex justify-center sm:justify-end items-center gap-4">
//               <img className="w-8 h-8 mr-1" src="/phone.png" alt="phone icon" />
//               <input
//                 className="Phone w-64 h-8 text-amber-50 border-b-2 border-white outline-none pt-3"
//                 type="num"
//                 id="phone"
//                 name="phone"
//                 placeholder="Phone:"
//               ></input>
//             </div>
//           </div>

//           <div className="Right w-full sm:w-1/2 h-full m-10 flex flex-col items-end justify-center">
//             <textarea
//               className="w-full h-60 p-2 mt-[8%] text-white bg-white/25 rounded-2xl outline-none"
//               id="message"
//               name="message"
//               placeholder="Message.."
//               required
//             ></textarea>

//             <button
//               className="cursor-pointer px-6 py-2 m-2 bg-white/25 hover:bg-white/40 text-white rounded-[0_27px_27px_27px] transition"
//               type="submit"
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>

//       <HeroBG />
//     </div>
//   );
// }
