import React from "react";
import HeroImg from "./../assets/heroImage.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] "
        src={HeroImg}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
        <div className="max-w-[700px] m-auto  h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Muhammad Saad
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">
            I'm a
            <span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Coder",
                  1000,
                  "Frontend Developer",
                  1000,
                  " UI/UX",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                repeat={Infinity}
              />
            </span>
          </h2>
          <div className="flex justify-between  pt-6  max-w-[200px] w-full text-[#008B8B]">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <a href="https://www.linkedin.com/in/muhammad-saad-b15679246/">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/saadkhan0099">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
