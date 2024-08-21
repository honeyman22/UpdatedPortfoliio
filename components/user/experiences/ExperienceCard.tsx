import Image from "next/image";
import React from "react";

const ExperienceCard = () => {
  return (
    <div className="experience-card  rounded-lg bg-white flex flex-col sm:flex-row sm:gap-10  p-4 shadow-custom ">
      <div>
        <Image
          src={"/exprience/ultimodeal.png"}
          alt="ultimodeal-logo"
          width={80}
          height={80}
          objectFit="contain"
        />
      </div>
      <div className="description-wrapper w-full">
        <h3 className="font-semibold text-lg sm:text-2xl text-[#003366]">
          Ultimodeal Online Shopping
        </h3>
        <h4 className="font-medium sm:text-xl">Frontend Developer</h4>
        <h5 className="">Jan 2018 - Dec 2020</h5>
        <p className="text-sm sm:text-base">
          As a frontend developer, I create and optimize the visual and
          interactive elements of websites and web apps. My work involves
          translating designs into responsive, efficient code using HTML, CSS,
          and JavaScript. I ensure a seamless user experience across all
          devices, collaborating with designers and backend developers to align
          with project goals. By staying updated on the latest web trends, I
          deliver modern, accessible, and user-friendly interfaces that enhance
          digital engagement.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
