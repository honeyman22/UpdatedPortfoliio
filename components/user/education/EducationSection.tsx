import ReusableHeader from "@/components/common/ReusableHeader";
import React from "react";
import EducationCard from "./EducationCard";
import { educations } from "@/utils/deleteable/education";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="education-section bg-secondary py-10 sm:py-20 px-4 sm:px-10  w-full"
    >
      <ReusableHeader
        title="My Education"
        message="Grounded in a solid educational background, I continuously expand my expertise to stay at the forefront of industry advancements, ensuring every project benefits from the latest insights and best practices"
      />
      <div className="flex w-full flex-col items-center gap-6 ">
        {educations.map((item) => (
          <EducationCard
            key={item.id}
            address={item?.address}
            name={item?.name}
            rank={item?.rank}
            subtitle={item?.subtitle}
            image={item?.image}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
