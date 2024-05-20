import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../assets/property.jpg";
import TravelWebsite from "../assets/TravelWebsite.png";
import Sales from "../assets/sales.png";
import PersonalWebsite from "../assets/personalwebsite.png";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto  md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold  text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 ">
        I've worked on a range of projects, both for training and for clients.
        Some of these projects are personal, where I've experimented with
        different technologies and design ideas. Others have been commissioned
        by clients, mostly small to medium-sized businesses, where I've
        developed websites to showcase their services and products. These
        projects have allowed me to hone my skills in frontend development,
        particularly in ReactJS, HTML, CSS3, javaScript and Tailwind CSS. I take
        pride in my work, ensuring that each project is delivered with attention
        to detail and a focus on meeting the client's requirements and
        expectations.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={Sales} title="Crypto App" />
        <ProjectItem img={PersonalWebsite} title="Personal App" />
        <ProjectItem img={TravelWebsite} title="Travel App" />
        <ProjectItem img={propertyImg} title="Property App" />
      </div>
    </div>
  );
};

export default Project;
