import React, { useState } from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2021,
    title: "Frontend Developer Intern",
    duration: "6 months",
    details: "Worked on developing frontend interfaces for college projects.",
  },
  {
    year: 2022,
    title: "Junior Web Developer For large Organization",
    duration: "10 months",
    details: "Assisted in developing web applications for Organization.",
  },
  {
    year: 2022,
    title: "Freelance Web Developer",
    duration: "Full-time",
    details: "Developed  websites  for small and medium businesses.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>

      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
