import FixtureCard from "@/components/npl/FixtureCard";
import { nplFixtures } from "@/utils/deleteable/nplfixtures";

const NPLHome = () => {
  return (
    <div className="grid  md:grid-cols-2  px-6 sm:px-10 gap-y-6  md:gap-x-10 lg:gap-x-40 ">
      {nplFixtures.map((team, index) => (
        <FixtureCard key={index + 3} data={team} />
      ))}
    </div>
  );
};

export default NPLHome;
