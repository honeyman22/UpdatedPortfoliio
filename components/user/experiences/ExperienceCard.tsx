"use client";

import Image from "next/image";
import React, { useState } from "react";

const ExperienceCard = ({
  item,
}: {
  item: {
    company: string;
    address: string;
    subtitle: string;
    position: string;
    image: string;
    listItems: string[];
    link: string;
  };
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="experience-card  rounded-lg bg-white flex flex-col sm:flex-row sm:gap-10  p-6 shadow-custom ">
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
        <a
          target="_blank"
          href={item.link}
          className="font-semibold text-lg sm:text-2xl text-[#003366]"
        >
          {item.company}
        </a>
        <p className="text-sm">{item.address}</p>
        <h4 className="font-medium sm:text-xl">
          {item.position} <span className="text-sm">( {item.subtitle} )</span>{" "}
        </h4>
        <h5 className=""></h5>
        <div
          className={`mt-2 transition-all duration-300 ${
            expanded ? "max-h-[1000px]" : "max-h-40 overflow-hidden"
          }`}
        >
          <ul className="list-check list-inside mt-2 space-y-1">
            {item?.listItems.map((listItem, index) => (
              <li key={index} className="text-sm sm:text-base">
                {listItem}
              </li>
            ))}
          </ul>
        </div>
        {item.listItems.length > 3 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-sm font-medium text-blue-600 hover:underline float-right flex items-center gap-1"
          >
            {expanded ? (
              <>
                Read less <span>👆</span>
              </>
            ) : (
              <>
                Read more <span>👇</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
