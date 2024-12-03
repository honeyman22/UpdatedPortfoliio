import TeamCard from "@/components/npl/TeamCard";
import { npmTeams } from "@/utils/deleteable/nplteams";

const NPLHome = () => {
  return (
    <div className="grid  md:grid-cols-2 xl:grid-cols-4 px-6 sm:px-10 gap-10 ">
      {npmTeams.map((team) => (
        <TeamCard key={team.id} data={team} />
      ))}
    </div>
  );
};

export default NPLHome;
