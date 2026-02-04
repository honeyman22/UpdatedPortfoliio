import React from "react";
import { TopDownAnimation } from "./animation/TopDownAnimaton";

const ReusableHeader = ({
  title,
  message,
}: {
  title: string;
  message: string;
}) => {
  return (
    <TopDownAnimation>
      <div className="pb-10 flex flex-col items-center justify-center">
        <h2
          className="section-title text-center text-[48px] leading-tight text-highlight font-semibold"
        >
          {title}
        </h2>
        <p className="text-base md:w-[540px] text-center text-[#003366]">
          {message}
        </p>
      </div>
    </TopDownAnimation>
  );
};

export default ReusableHeader;
