import React from "react";import { FaChevronRight } from "react-icons/fa";
export default function ExperienceCard({
  experience,
}: Readonly<{
  experience: {
    role: string;
    company: string;
    responsibilities: string[];
    duration: string;
    reverse: boolean;
    icon: React.ReactNode;
  };
}>) {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center md:justify-between`}
    >
      <div
        className={`flex-1 w-full md:w-5/12 ${
          experience.reverse ? "md:pl-8" : "md:pr-8"
        } ${experience.reverse ? "" : "md:text-right"}  md:order-1`}
      >
        <div className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-primary-500 transition-all duration-300">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-4">
            {experience.duration}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">
            {experience.role}
          </h3>
          <h4 className="text-primary-500 mb-4">{experience.company}</h4>
          <ul className="text-neutral-300 space-y-2">
            {experience.responsibilities.map((item, index) => (
              <li key={index + 4} className="flex items-start">
                <FaChevronRight className=" text-primary-500 mt-1.5 mr-2" />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-neutral-900 bg-primary-500 text-white order-1 md:order-2">
        {experience.icon}
      </div>
    </div>
  );
}
