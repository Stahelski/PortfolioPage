"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Coffee,
  Code,
  Heart,
} from "lucide-react";

export default function NewAboutMePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "Tailwind",
    "Figma",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06000f] to-sky-950 text-stone-300 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-8 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-stone-300 bg-clip-text text-transparent mb-1">
              About Me
            </h1>
            <div className="w-121 h-0.5 bg-gradient-to-r from-stone-300 to-stone-400 mx-auto rounded-full mb-6"></div>

            {/* Navigation */}
            <nav className="flex justify-center space-x-8 text-lg font-medium">
              <a
                href="/"
                className="w-21 h-10 bg-sky-950 rounded-full flex items-center justify-center border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
              >
                Home
              </a>
              <a
                href="/contactPage"
                className="w-21 h-10 bg-sky-950 rounded-full flex items-center justify-center border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
              >
                Contact
              </a>
              <a
                href="https://github.com/Stahelski"
                target="_blank"
                rel="noopener noreferrer"
                className="w-21 h-10 bg-sky-950 rounded-full flex items-center justify-center border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
              >
                GitHub
              </a>
            </nav>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div
              className={`transition-all duration-1000 delay-300 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative group lg:mb-85">
                <div className="absolute -inset-4 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative">
                  <img
                    src="/ImgMe.jpg"
                    alt="Profile"
                    className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent rounded-2xl hover:scale-105 transition-transform duration-500"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-500 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* Dynamic greeting */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Hi, I'm{" "}
                  <span className="bg-stone-300 bg-clip-text text-transparent">
                    Stian Karlsen
                  </span>
                </h2>
                <div className="flex items-center space-x-2 text-xl text-sky-300">
                  <Code className="w-5 h-5" />
                  <span>I build with</span>
                  <span className="font-semibold text-sky-400 min-w-[100px] text-left">
                    {skills[currentSkill]}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6 text-stone-300 leading-relaxed">
                <p className="text-md">
                  I'm a web developer, and I love what I do! Hello and welcome
                  to my about page. I consider myself a bit of a Swiss Army
                  knife in life — if there’s a problem, there’s a solution. It
                  just takes time to find the right one sometimes. In general,
                  I’m a calm and quiet person. Until you hit on one of my
                  interests — then I light up. Haha. Some of my interests
                  include: communication, web development (obviously),
                  psychology, exercise, food and nutrition, design, and just
                  learning in general. I’m not a pro in any of these topics, but
                  I genuinely enjoy diving into them whenever I can.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center p-4 bg-[#332f3a] rounded-xl border border-sky-300 backdrop-blur-sm hover:bg-[#393541] hover:border-sky-400 transition-all shadow-lg">
                  <div className="text-2xl font-bold text-sky-400">25+</div>
                  <div className="text-sm text-stone-300">Projects</div>
                </div>
                <div className="text-center p-4 bg-[#332f3a] rounded-xl border border-sky-300 backdrop-blur-sm hover:bg-[#393541] hover:border-sky-400 transition-all shadow-lg">
                  <div className="text-2xl font-bold text-sky-400">1</div>
                  <div className="text-sm text-stone-300">Years Exp</div>
                </div>
                {/* <div className="text-center p-4 bg-white/70 rounded-xl border border-amber-200 backdrop-blur-sm hover:bg-white/80 hover:border-amber-300 transition-all shadow-lg">
                  <div className="text-2xl font-bold text-amber-600">?+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div> */}
              </div>

              {/* Location & Interests */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-[#332f3a] px-3 py-2 rounded-full border border-sky-300 shadow-sm">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="text-stone-300">Norway</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#332f3a] px-3 py-2 rounded-full border border-sky-300 shadow-sm">
                  <Coffee className="w-4 h-4 text-sky-400" />
                  <span className="text-stone-300">Food Enthusiast</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#332f3a] px-3 py-2 rounded-full border border-sky-300 shadow-sm">
                  <Heart className="w-4 h-4 text-sky-400" />
                  <span className="text-stone-300">Gym</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <button className="group flex items-center space-x-2 bg-gradient-to-r from-sky-700 to-sky-500 text-stone-300 px-6 py-3 rounded-full font-semibold hover:from-sky-600 hover:to-sky-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Mail className="w-4 h-4 text-sky-300" />
                  <span>Get In Touch</span>
                </button>
                <button className="flex items-center space-x-2 border border-sky-300 px-6 py-3 rounded-full font-semibold text-stone-300 hover:bg-sky-950 hover:border-sky-400 transition-colors shadow-sm">
                  <Github className="w-4 h-4 text-[#b845f2]" />
                  <span>View Work</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-sky-950 rounded-full flex items-center justify-center border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
                >
                  <Github className="w-4 h-4 text-stone-300 group-hover:text-[#b845f2]" />
                </a>
                <a
                  href="/NewHero"
                  className="w-10 h-10 bg-sky-950 rounded-full flex items-center justify-center border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-stone-300 group-hover:text-[#0a66c2]" />
                </a>
                <a
                  href="/TickTackToe"
                  className="w-10 h-10 bg-sky-950 rounded-full flex items-center justify-center border border-sky-300 hover:bg-sky-900 hover:border-sky-400 transition-colors group shadow-sm"
                >
                  <Mail className="w-4 h-4 text-stone-300 group-hover:text-sky-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import Footer from "@/app/components/organisms/Footer";
// import AboutNavbar from "./aboutNavbar";
// import React from "react";

// export default function AboutPage() {
//   return (
//     <div className="min-h-[100dvh] w-full flex flex-col text-[#546e70]">
//       <AboutNavbar />

//       {/* Top Section */}
//       <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center px-6 py-10 gap-10">
//         {/* Text */}
//         <div className="max-w-[700px] w-full">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">About</h1>
//           <div className="h-px bg-black mb-4 w-2/3"></div>
//           <div className="space-y-2 text-base md:text-lg">
//             <p>I'm a web developer, and I love what I do!</p>
//             <p>Hello and welcome to my about page. Since you're here,</p>
//             <p>you’re probably curious to learn more about me. ^^</p>
//             <p>
//               I consider myself a bit of a Swiss Army knife in life — if there’s
//               a problem,
//             </p>
//             <p>
//               there’s a solution. It just takes time to find the right one
//               sometimes.
//             </p>
//             <p>
//               In general, I’m a calm and quiet person. Until you hit on one of
//               my interests —
//             </p>
//             <p>
//               then I light up. Haha. Some of my interests include:
//               communication,
//             </p>
//             <p>web development (obviously), psychology, exercise,</p>
//             <p>
//               food and nutrition, design, and just learning in general. I’m not
//               a pro in any of
//             </p>
//             <p>
//               these topics, but I genuinely enjoy diving into them whenever I
//               can.
//             </p>
//           </div>
//         </div>

//         {/* Image */}
//         <img
//           src="/StianAboutPage.png"
//           alt="Stian"
//           className="h-[40vh] w-auto max-w-full object-contain"
//         />
//       </div>

//       {/* Divider */}
//       <div className="h-px bg-black w-[80%] mx-auto my-6"></div>

//       {/* Mid Image Section */}
//       <div className="w-full flex flex-wrap justify-center gap-4 px-6 py-10">
//         {[1, 2, 3, 4].map((num) => (
//           <div
//             key={num}
//             className="bg-gray-100 w-[45%] sm:w-[22%] aspect-square rounded-md"
//           />
//         ))}
//       </div>

//       {/* Bottom Divider */}
//       <div className="h-px bg-black w-full" />

//       <Footer />
//     </div>
//   );
// }
