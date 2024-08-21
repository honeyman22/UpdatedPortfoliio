import Image from "next/image";
import React from "react";

const SkillCard = () => {
  return (
    <div className="skill-card p-4 flex flex-col gap-2 bg-white rounded-lg">
      <div className="">
        <Image
          src="/skills/react.png"
          alt="react-logo"
          width={40}
          height={40}
        />
      </div>
      <h1 className="font-semibold text-lg">React</h1>
      <p className="text-sm">
        My work involves translating designs into responsive, efficient code
        using HTML, CSS, and JavaScript.{" "}
      </p>
    </div>
  );
};

export default SkillCard;
