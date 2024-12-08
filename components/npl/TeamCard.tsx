import { TeamDataDto } from "@/dtos/npl/teams-dto";
import Image from "next/image";
import React from "react";

const TeamCard = ({ data }: { data: TeamDataDto }) => {
  return (
    <li
      className="w-full h-[400px] rounded-xl overflow-hidden relative"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8, \
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"> \
        <path d="M0 0 H300 V100 Q150 150 0 100 Z" fill="${encodeURIComponent(
          data?.primaryColor
        )}" /> \
        <path d="M0 100 Q150 150 300 100 V200 H0 Z" fill="${encodeURIComponent(
          data?.secondaryColor
        )}" /> \
      </svg>')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 h-[200px]  flex flex-col justify-center items-center text-white p-6">
        <Image alt={data.name} src={data?.image} width={100} height={100} />
        <h2 className="text-2xl text-white font-semibold">{data.shortName}</h2>
      </div>
    </li>
  );
};

export default TeamCard;
