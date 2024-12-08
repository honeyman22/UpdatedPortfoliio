import { FixtureDto } from "@/dtos/npl/teams-dto";
import Image from "next/image";
import React from "react";
import moment from "moment";

const FixtureCard = ({ data }: { data: FixtureDto }) => {
  return (
    <div className="w-full p-4 border rounded-lg">
      <div className="flex justify-between items-center">
        <div className="team-one-info">
          <Image
            src={data?.team1?.image}
            alt={data?.team1?.name}
            height={50}
            width={50}
          />
          <h3 className="">{data?.team1?.name}</h3>
        </div>
        <h3 className="text-2xl font-bold">Vs</h3>
        <div className="team-two-info">
          <Image
            src={data?.team2?.image}
            alt={data?.team2?.name}
            height={50}
            width={50}
          />
          <h3 className="">{data?.team2?.name}</h3>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h3 className="">Venue : TU Stadium </h3>
        <h3 className="">
          Time :{" "}
          {moment(data?.date).toLocaleString().format("MMMM DD YYYY, HH:MM A")}
        </h3>
        {data?.isFinished && <h4 className="">Won By : {data?.wonBy} </h4>}
      </div>
    </div>
  );
};

export default FixtureCard;
