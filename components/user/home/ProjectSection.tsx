<<<<<<< HEAD
import { TopDownAnimation } from "../../common/animation/TopDownAnimaton";
import { projectCategory } from "@/utils/deleteable/project-section";

import { projectCategoryType } from "@/utils/types/dto";
import ProjectCard from "./ProjectCard";
=======
import { projectCategory } from "@/utils/deleteable/project-section";
import ProjectCard from "./ProjectCard";
import { ProjectCategoryType } from "@/utils/types/dto";
import ReusableHeader from "@/components/common/ReusableHeader";
>>>>>>> 3032a6c7604f368fbec5708b9b6c6f1d84b612e5

const ProjectSection = () => {
  return (
    <section className="project-section bg-secondary py-10 sm:py-20 px-4 sm:px-10  w-full">
<<<<<<< HEAD
      <TopDownAnimation>
        <div className="pb-10">
          <h2 className="section-title text-center text-[48px] leading-[58px] sm:leading-tight tracking-wide  text-highlight font-semibold">
            My Expertise
          </h2>
          <p className="text-base text-center text-[#003366]">
            Discover my range of professional services designed to help you
            achieve your business goals.
          </p>
        </div>
      </TopDownAnimation>

      <div className="project-card-wrapper grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {projectCategory.map((category: projectCategoryType) => (
=======
      <ReusableHeader
        title="  My Expertise"
        message="Discover my range of professional services designed to help you
            achieve your business goals."
      />{" "}
      <div className="project-card-wrapper grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {projectCategory.map((category: ProjectCategoryType) => (
>>>>>>> 3032a6c7604f368fbec5708b9b6c6f1d84b612e5
          <ProjectCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
