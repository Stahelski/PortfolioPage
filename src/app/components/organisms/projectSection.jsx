"use client";

import Image from "next/image";
import Link from "next/link";
// Bruker next/image for bedre ytelse, automatisk lazy loading og tilpasset responsivitet

export default function ProjectSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 py-10 sm:flex-row sm:py-16  bg-white">
      {/* Project Image Link */}
      <Link
        href="/projectPage"
        className="flex justify-center items-center w-full sm:w-1/2"
      >
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-4xl rounded-xl overflow-hidden shadow-[4px_8px_20px_8px] backdrop-blur-md bg-white my-5 p-4">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-4xl rounded-xl overflow-hidden shadow-sm backdrop-blur-md bg-zinc-100 p-4">
            {/* Desktop Image */}
            <div className="hidden sm:block">
              <img
                src="/GymAppPage123.png"
                alt="Gym App Desktop Preview"
                width={600}
                height={400}
                className="mx-auto"
              />
            </div>

            {/* Mobile Image */}
            <div className="block sm:hidden">
              <img
                src="/GymAppPage123MobilLeft.png"
                alt="Gym App Mobile Preview"
                width={350}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Project Description */}
      <div className="w-5/6 max-w-sm text-center sm:text-left sm:w-1/2 px-2 sm:px-4">
        <h1 className="font-bold text-sm sm:text-base lg:text-lg text-zinc-950 leading-relaxed">
          Meso
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-zinc-950 leading-relaxed">
          This was my first ever mobile/web app design. I took inspiration from
          one of my favorite exercise apps. It combines professional design with
          a simple, straight-to-the-point interface, and a cutting-edge AI
          system to help you stay on track and push your limits in a scientific
          way. It will help you plan your meso cycles and strive toward new
          goals!
        </p>
      </div>
    </section>
  );
}

// "use client";

// import React from "react";
// import css from "../../globals.css";
// import Link from "next/link";

// export default function ProjectSection() {
//   return (
//     <>
//       <div className="ProjectSectionContainer h-[80dvh] pl-2 sm:h-[85dvh] xl:h-[100dvh] flex flex-col sm:flex-row justify-center items-center gap-6">
//         <Link
//           href="/projectPage"
//           className="ProjectImageContainer w-[70dvw] h-[47dvh] sm:w-149 sm:h-100 sm:ml-5 xl:w-70 xl:h-110 flex justify-center items-center"
//         >
//           <div className="ProjectImageGraybox w-[86dvw] h-[44dvh] sm:w-140 sm:h-92 xl:w-260 xl:h-100 m-3">
//             <img
//               src="/GymAppPage123.png"
//               className="relative w-130 mt-4 mx-auto xl:w-60 bottom-2 hidden sm:block"
//             ></img>
//             <img
//               src="/GymAppPage123MobilLeft.png"
//               className="relative w-[72dvw] mx-auto block sm:hidden"
//             ></img>
//           </div>
//         </Link>
//         <div className="ProjectText w-75 mt-10 text-xs sm:w-120 sm:text-sm sm:mr-5 xl:text-lg xl:w-220 flex justify-center items-center">
//           This was my first ever mobile/web app design. Taken inspiration from
//           one of my favorite exercise apps. It combines a professional design,
//           simple and straight to the point. with cutting edge AI system to help
//           you stay on track and push your limits in a scientific way! It wil
//           help you plan your messo and strive fore new goals!
//         </div>
//       </div>
//     </>
//   );
// }
