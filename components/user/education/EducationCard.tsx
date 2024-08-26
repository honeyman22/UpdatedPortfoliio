import Image from "next/image";
import React from "react";

const EducationCard = ({
  name,
  subtitle,
  rank,
  address,
  image,
}: {
  name: string;
  subtitle: string;
  rank: string;
  address: string;
  image: string;
}) => {
  return (
    <div className="experience-card w-full  rounded-lg bg-white flex flex-col sm:flex-row sm:gap-10  p-4 shadow-custom ">
      <div>
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          objectFit="contain"
        />
      </div>
      <div className="description-wrapper w-full">
        <h3 className="font-semibold text-lg sm:text-2xl text-[#003366]">
          {name}
        </h3>
        <h4 className="font-medium sm:text-xl">{address}</h4>
        <h5 className="">{subtitle}</h5>
        <p className="">{rank}</p>
      </div>
    </div>
  );
};

export default EducationCard;
