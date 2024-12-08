import TeamCard from "@/components/npl/TeamCard";
import { npmTeams } from "@/utils/deleteable/nplteams";

const NPLTeams = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 gap-10 ">
      {npmTeams.map((team) => (
        <TeamCard key={team.id} data={team} />
      ))}
    </div>
  );
};

export default NPLTeams;
