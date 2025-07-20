import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="projectCardContainer h-65 min-w-full my-5 flex justify-center items-center">
      <img
        src={props.image}
        alt={props.title}
        className="Left h-full w-110 mx-2.5 p-1 bg-[#39363f] rounded-md border-4 border-sky-600/5"
      />
      <div className="Right h-full w-110 mx-2.5 rounded-md bg-[#39363f] text-stone-200 ">
        <h2 className="h-6 w-full pl-6 mt-4 mb-1 font-bold">{props.title}</h2>
        <p className="h-41 w-full pl-6 pr-13 mb-2">
          {props.projectDescription}
        </p>
        <div className="w-18 h-6 ml-6 mb-4 rounded-md bg-sky-800 text-stone-200 flex justify-center items-center">
          {props.teckLable}
        </div>
      </div>
    </div>
  );
}
