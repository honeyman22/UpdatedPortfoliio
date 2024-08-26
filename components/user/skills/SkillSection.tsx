import ReusableHeader from "@/components/common/ReusableHeader";
import React from "react";

import { HorizontalMarquee } from "@/components/common/HorizontalMarqe";
import { skills } from "@/utils/deleteable/skills";

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
      <div className="flex flex-col gap-6">
        {" "}
        <HorizontalMarquee
          items={skills.slice(0, 8)}
          speed="slow"
          direction="left"
        />
        <HorizontalMarquee
          items={skills.slice(8, 16)}
          speed="slow"
          direction="right"
          pauseOnHover
        />
      </div>
    </section>
  );
};

export default SkillSection;
