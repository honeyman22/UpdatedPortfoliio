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
      <div className="pb-10  ">
        <h2 className="section-title text-center text-[48px] tracking-wide  text-highlight font-semibold">
          {title}
        </h2>
        <p className="text-base  text-center text-[#003366]">{message}</p>
      </div>
    </TopDownAnimation>
  );
};

export default ReusableHeader;
