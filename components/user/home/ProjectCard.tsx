"use client";
import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { ProjectCategoryType } from "@/utils/types/dto";
const ProjectCard = ({ category }: { category: ProjectCategoryType }) => {
  const lotteRef = useRef<Player | null>(null);
  return (
    <div className="project-card relative cursor-pointer border h-80 shadow-custom w-full gap-4 p-4 justify-center bg-gray-50 rounded-xl flex flex-col">
      <Player
        ref={lotteRef}
        autoplay={true}
        loop={true}
        controls={true}
        src={"/lotties/animationweb.json"}
        style={{ height: "80px", width: "80px" }}
      ></Player>
      <h2 className="font-medium text-[#003366] text-center text-xl">
        {category?.name}
      </h2>
      <p className="text-sm text-[#222222] text-center">
        {category.description}
      </p>
    </div>
  );
};

export default ProjectCard;
