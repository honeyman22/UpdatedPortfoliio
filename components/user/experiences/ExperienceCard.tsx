import Image from "next/image";
import React from "react";

const ExperienceCard = ({
  item,
}: {
  item: {
    company: string;
    address: string;
    subtitle: string;
    position: string;
    image: string;
    description: string;
  };
}) => {
  return (
    <div className="experience-card  rounded-lg bg-white flex flex-col sm:flex-row sm:gap-10  p-4 shadow-custom ">
      <div>
        <Image
          src={item?.image}
          alt={item.company}
          width={80}
          height={80}
          objectFit="contain"
        />
      </div>
      <div className="description-wrapper w-full">
        <h3 className="font-semibold text-lg sm:text-2xl text-[#003366]">
          {item.company} <span className="text-sm">{item.address}</span>
        </h3>
        <h4 className="font-medium sm:text-xl">{item.position}</h4>
        <h5 className="">{item?.subtitle}</h5>
        <p className="text-sm sm:text-base">{item?.description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
