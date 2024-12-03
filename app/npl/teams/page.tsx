import TeamCard from "@/components/npl/TeamCard";
import { npmTeams } from "@/utils/deleteable/nplteams";


const NPLTeams = () => {
  return (
    <div className="grid grid-cols-4 px-10 gap-10 ">
      {npmTeams.map((team) => (
        <TeamCard key={team.id} data={team} />
      ))}
    </div>
  );
};

export default NPLTeams;
