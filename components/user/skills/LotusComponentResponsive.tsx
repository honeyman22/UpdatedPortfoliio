import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface LotusComponentResponsiveProps {
  index: number;
  image?: string;
  title?: string;
  description?: string;
  className?: string;
  containerRef: React.MutableRefObject<null>;
}

const LotusComponentResponsive: React.FC<LotusComponentResponsiveProps> = ({
  index,
  image,
  title,
  description,
}) => {
  const rotate = index * 30 - 195;

  return (
    <div
      className={`flex flex-col items-center p-4 xxs:p-8 bg-[#3C2E6C] w-[280px] xxs:w-[310px] sm:w-[366px] xs-laptop:w-[340px] xs-laptop:h-[440px] xl:w-[366px] gap-4 absolute rounded-2xl shadow-[0px_-2px_3px_0px_rgba(255,255,255,0.19)]`}
      id="lotus-card"
      style={{
        top: `${10 * index}px`,
        scale: 0.7 + index / 30,
        transformOrigin: "top",
      }}
    >
      {/* image */}
      <div
        className="w-[220px] h-[89px] sm:w-[318px] sm:h-[161.04px] xl:w-[318px] xl:h-[161.04px] flex items-center justify-center"
        // style={{
        //   transform: `rotate(${rotate}deg)`,
        // }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            transform: `rotate(${rotate}deg)`,
            transformOrigin: "center",
          }}
        >
          <svg
            width="206.5"
            height="108"
            viewBox="0 0 206.5 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="origin-center transition-all duration-700 scale-50 sm:scale-75"
          >
            <path
              d="M143.481 83.2406C169.904 90.1503 195.725 70.2137 195.725 42.9023V42.9023C195.725 15.591 169.904 -4.34557 143.481 2.56408L4.02419 39.0325C0.0401595 40.0743 0.040169 45.7304 4.02419 46.7722L143.481 83.2406Z"
              stroke="#FF7500"
              strokeWidth="0.5"
            />
          </svg>

          <div className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]  transition-all duration-700 rounded-full bg-white absolute top-[35px] right-[4rem] sm:top-[30px] sm:right-[3rem] flex items-center justify-center">
            <span
              className="relative flex items-center justify-center w-full h-full"
              style={{
                transform: `rotate(${-rotate}deg)`,
                transformOrigin: "center",
              }}
            >
              <Image
                src={image ? image : ""}
                width={20}
                height={20}
                alt="asd"
                className="object-cover absolute transition-all duration-700"
              />
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-[500] text-white tracking-[0.8px]">
        {title}
      </h3>
      <p className="text-primary text-center tracking-[0.4px] xxs:tracking-[0.8px] text-sm xxs:text-base">
        {description}
      </p>
    </div>
  );
};

export default LotusComponentResponsive;
