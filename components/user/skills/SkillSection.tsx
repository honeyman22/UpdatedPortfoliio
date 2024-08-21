import ReusableHeader from "@/components/common/ReusableHeader";
import React from "react";
import SkillCard from "./SkillCard";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className=" bg-primary py-10 sm:py-20 px-4 sm:px-10  w-full"
    >
      <ReusableHeader
        title="My Skills"
        message="Elevate your projects with my comprehensive skill set, blending technical expertise and creative insight to achieve outstanding, impactful solutions."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </section>
  );
};

export default SkillSection;
