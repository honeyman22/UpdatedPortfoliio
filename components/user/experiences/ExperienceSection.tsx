import React from "react";
import ExperienceCard from "./ExperienceCard";
import ReusableHeader from "@/components/common/ReusableHeader";

const ExperienceSection = () => {
  return (
    <section className=" bg-primary py-10 sm:py-20 px-4 sm:px-10  w-full">
      <ReusableHeader
        title="My Experiences"
        message="Leverage my extensive background in frontend development to bring your projects to life with precision, creativity, and innovation."
      />
      <div className="grid lg:grid-cols-2 gap-6">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  );
};

export default ExperienceSection;
