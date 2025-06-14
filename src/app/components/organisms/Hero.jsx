"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../molecules/Navbar";
import Sidebar from "../molecules/Sidebar";
import HeroBG from "../atoms/HeroBG";

export default function Hero() {
  return (
    <div className="HeroMainContainer relative z-[2] h-screen flex justify-center items-center">
      <div className="HeroMain relative h-3/4 w-3/4 z-[1] bg-white/5 backdrop-blur-sm">
        <Navbar />
        <Sidebar />

        {/* Main content grid */}
        <div className="grid grid-rows-6 grid-cols-6 h-full gap-8 px-15 pt-4 sm:px-2 md:px-2 lg:pr-5 lg:pl-20">
          {/* Main headline */}
          <div className="col-start-1 col-span-4 row-start-1 flex">
            <h1 className="HeroText flex-1 text-zinc-50 text-lg sm:text-lg sm:pl-[18%] md:text-2xl lg:text-2xl xl:text-3xl xl:pl-[10%] leading-tight w-full">
              A strategic creative studio focused on building powerful web pages
              that drives impact.
            </h1>
          </div>

          {/* About text */}
          <div className="col-start-4 col-span-4 row-start-5 flex items-end">
            <p className="HeroText text-sm sm:text-base md:text-lg lg:text-xl text-zinc-100 leading-relaxed max-w-xl">
              Hello, my name is Stian Karlsen and I am a web dev located in
              Norway. Spending time designing and building web pages is
              something I truly enjoy. At the end of the day, I go to the gym to
              clear my mind and recharge, building and getting stronger is
              something I try and implement in every aspect of my life.
            </p>
          </div>
        </div>
      </div>
      <HeroBG />
    </div>
  );
}
// "use client";
// import React from "react";
// import Link from "next/link";
// import Navbar from "../molecules/Navbar";
// import Sidebar from "../molecules/Sidebar";
// import HeroBG from "../atoms/HeroBG";

// export default function Hero() {
//   return (
//     <>
//       <div className="HeroMainContainer z-[2] h-[100dvh] flex justify-center items-center">
//         <div className="HeroMain relative h-[75%] w-[75%]  z-[1] bg-white/5 backdrop-blur-xs">
//           <Navbar />
//           <Sidebar />
//           <div className="HeroText text-amber-50 sm:w-[35dvw] sm:ml-25 sm:mt-5 sm:text-[2.5dvh] lg:w-[35dvw] lg:ml-40 lg:mt-7 lg:text-[2.5dvh]">
//             A strategic creative studio focused on building powerful web pages
//             that Drives Impact.
//           </div>

//           <div className="absolute top-60 left-12 w-fit md:top-70 md:left-20 md:w-full lg:left-80 lg:top-75 max-w-lg text-left sm:1/2 px-2 sm:px-4">
//             <p className="HeroText text-sm sm:text-base lg:text-lg text-zinc-100 leading-relax">
//               Hello, my name is Stian Karlsen and i am a web dev located in
//               Norway. Spending time designing and building web pages is
//               something i truly enjoy. At the end of the day, i go to the gym to
//               clear my mind and recharge, building and getting stronger is
//               something i try and implement in every aspect of my life.
//             </p>
//           </div>
//         </div>
//         <HeroBG />
//       </div>
//     </>
//   );
// }
// text-amber-50 sm:mx-auto sm:w-[35dvw] sm:mt-18 sm:text-[2.5dvh] lg:w-[35dvw] lg:mt-55 lg:mr-30 lg:text-[2.5dvh]
