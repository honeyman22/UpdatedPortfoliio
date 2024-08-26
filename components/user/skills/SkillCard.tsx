import Image from "next/image";
import React from "react";

const SkillCard = ({
  item,
}: {
  item: {
    name: string;
    icon: string;
    description: string;
  };
}) => {
  return (
    <div className="skill-card p-4 flex flex-col gap-2 bg-white rounded-lg">
      <div className="h-[40px] w-[40px] relative">
        <Image src={item.icon} alt={item?.name} fill layout="contain" />
      </div>
      <h1 className="font-semibold text-lg">{item.name}</h1>
      <p className="text-sm line-clamp-3 ">{item.description}</p>
    </div>
  );
};

export default SkillCard;
