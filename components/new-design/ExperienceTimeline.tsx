import React from "react";import ExperienceCard from "./ExperienceCard";
export default function ExperienceTimeline({
  experiences,
}: Readonly<{
  experiences: {
    role: string;
    company: string;
    responsibilities: string[];
    duration: string;

    reverse: boolean;
    icon: React.ReactNode;
  }[];
}>) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-neutral-800"></div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index + 4} experience={experience} />
        ))}
      </div>
    </div>
  );
}
