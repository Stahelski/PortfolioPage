"use client";

import Link from "next/link";
import Footer from "@/app/components/organisms/Footer";
import AboutNavbar from "./aboutNavbar";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col text-[#546e70]">
      <AboutNavbar />

      {/* Top Section */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center px-6 py-10 gap-10">
        {/* Text */}
        <div className="max-w-[700px] w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About</h1>
          <div className="h-px bg-black mb-4 w-2/3"></div>
          <div className="space-y-2 text-base md:text-lg">
            <p>I'm a web developer, and I love what I do!</p>
            <p>Hello and welcome to my about page. Since you're here,</p>
            <p>you’re probably curious to learn more about me. ^^</p>
            <p>
              I consider myself a bit of a Swiss Army knife in life — if there’s
              a problem,
            </p>
            <p>
              there’s a solution. It just takes time to find the right one
              sometimes.
            </p>
            <p>
              In general, I’m a calm and quiet person. Until you hit on one of
              my interests —
            </p>
            <p>
              then I light up. Haha. Some of my interests include:
              communication,
            </p>
            <p>web development (obviously), psychology, exercise,</p>
            <p>
              food and nutrition, design, and just learning in general. I’m not
              a pro in any of
            </p>
            <p>
              these topics, but I genuinely enjoy diving into them whenever I
              can.
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          src="/StianAboutPage.png"
          alt="Stian"
          className="h-[40vh] w-auto max-w-full object-contain"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-black w-[80%] mx-auto my-6"></div>
   

      {/* Mid Image Section */}
      <div className="w-full flex flex-wrap justify-center gap-4 px-6 py-10">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="bg-gray-100 w-[45%] sm:w-[22%] aspect-square rounded-md"
          />
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="h-px bg-black w-full" />

      <Footer />
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import Footer from "@/app/components/organisms/Footer";
// import PageNavbar from "../components/organisms/PageNavbar";
// import React from "react";

// export default function aboutPage() {
//   return (
//     <div className="AboutPageContainer h-[200dvh]">
//        <PageNavbar/>

//       <div className="AboutTopContainer h-100 w-screen flex justify-around items-end">
//         <div className="AboutText bg-transparent ml-30 mb-7 h-[35dvh] w-[45dvw]">
//           <h1 className="AboutTextH1 font-bold text-[3dvw] ml-10 ">About</h1>
//           <div className="AboutTextLine mb-2 h-[1px] w-[25dvw]"></div>
//           <p>I'm a web developer, and I love what I do!</p>
//           <p>Hello and welcome to my about page. Since you're here,</p>
//           <p>you’re probably curious to learn more about me. ^^</p>
//           <p>
//             I consider myself a bit of a Swiss Army knife in life — if there’s a
//             problem,
//           </p>
//           <p>
//             there’s a solution. It just takes time to find the right one
//             sometimes.
//           </p>
//           <p>
//             In general, I’m a calm and quiet person. Until you hit on one of my
//             interests —{" "}
//           </p>
//           <p>
//             then I light up. Haha. Some of my interests include: communication,
//           </p>
//           <p>
//             web development (obviously), psychology, architecture, exercise,
//           </p>
//           <p>
//             food and nutrition, design, and just learning in general. I’m not a
//             pro in any of
//           </p>
//           <p>
//             these topics, but I genuinely enjoy diving into them whenever I can.
//           </p>
//         </div>
//         <img
//           src="/StianAboutPage.png"
//           className="ImageMe mr-50 mt-0.5 h-[40dvh] w-auto"
//         ></img>
//       </div>
//       <div className="AboutTextLine mx-auto h-[1px] w-[80dvw]"></div>
//       <div className="AboutMidContainer h-100 w-screen flex justify-around items-center">
//         <img className="ImgContainer1 bg-gray-100 h-50 w-50"></img>
//         <img className="ImgContainer2 bg-gray-100 h-50 w-50"></img>
//         <img className="ImgContainer3 bg-gray-100 h-50 w-50"></img>
//         <img className="ImgContainer4 bg-gray-100 h-50 w-50"></img>
//       </div>

//       <div className="AboutBottomContainer h-[90dvh] w-screen flex justify-around items-center">
//         <div className="RandomImage bg-gray-100 ml-10 h-[50dvh] w-[40dvw] rounded-[27px]"></div>
//         <div className="RandomFactsText bg-transparent mr-10 h-[50dvh] w-[40dvw]">
//           <h2 className="AboutTextH1 text-[3dvw] ml-25 ">Random facts</h2>
//           <p className="pb-3">
//             ⏺ I used to spend my spare time carving wood and making fine
//             furniture — still love the smell of sawdust.{" "}
//           </p>
//           <p className="pb-3">
//             ⏺ I might have been a pretty solid Call of Duty player back in 2014.
//           </p>
//           <p className="pb-3">⏺ My favorite food, reheated chili con carne.</p>
//           <p className="pb-3">
//             ⏺ I proudly embrace my inner couch potato on the weekends 🛋️
//           </p>
//         </div>
//       </div>
//       <div className="AboutTextLine mx-auto h-[1px] w-[100dvw]"></div>
//       <Footer />
//     </div>
//   );
// }
