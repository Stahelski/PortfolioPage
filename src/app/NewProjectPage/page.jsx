import React from "react";
import Link from "next/link";
import ProjectCard from "../components/molecules/ProjectCard";

export default function NewProjectPage() {
  return (
    <div className="NewProjectPage bg-[#000000] min-h-screen max-w-9xl flex flex-col">
      <div className="NPP-Navbar h-10 max-w-9xl pt-1 mt-5 flex justify-center items-center">
        <div className="innerContainer h-full w-45 py-1 bg-[#332f3a] rounded-sm flex justify-around items-center">
          <a
            className="homeLink cursor-pointer bg-[#8469c8] text-stone-200 h-[80%] w-[35%] ml-2 rounded-md flex justify-center items-center hover:bg-[#8f74d1]"
            href="/"
          >
            Home
          </a>
          <a
            className="AboutLink cursor-pointer bg-[#8469c8] text-stone-200 h-[80%] w-[35%] mr-2 rounded-md flex justify-center items-center hover:bg-[#8f74d1]"
            href="aboutPage"
          >
            About
          </a>
        </div>
      </div>
      <ProjectCard
        image="/GymAppPage1.png"
        title="Project title"
        projectDescription="This is the card content A project description is a document that provides a comprehensive overview of a project, outlining its goals, objectives, scope, timelines, and deliverables. It acts as a roadmap for all stakeholders, ensuring a shared understanding of the project's."
        teckLable="React"
      />
    </div>
  );
}
