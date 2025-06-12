import { cmsData } from "@/utils/usefuldata/ecommerce.data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Page = () => {
  return (
    <div className="px-4 sm:px-10 py-6 flex flex-col  justify-center items-center">
      <h2 className="text-2xl font-semibold underline">CMS Projects</h2>
      <p className="sm:w-[50%] text-center mt-2 ">
        Building Scalable, Secure, and High-Performance CMS Solutions for
        Seamless Business Experiences
      </p>
      <div className="grid w-full grid-cols-1 mt-8 justify-center  lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {cmsData?.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target="_blank"
            className="project-card bg-gray-50 flex flex-col gap-3 rounded-lg  bg border p-5"
          >
            <div className="w-full relative h-[200px]">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                className="object-cover object-top h-full w-full"
              />
            </div>
            <h2 className="text-lg text-center font-semibold text-[#003366]">
              {item.name}
            </h2>
            <p className="text-sm text-center">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
