import { TopDownAnimation } from "./../../common/animation/TopDownAnimaton";
import { projectCategory } from "@/utils/deleteable/project-section";
import ProjectCard from "./ProjectCard";
import { projectCategoryType } from "@/utils/types/dto";

const ProjectSection = () => {
  return (
    <section className="project-section bg-secondary py-10 sm:py-20 px-4 sm:px-10  w-full">
      <TopDownAnimation>
        <div className="pb-10">
          <h2 className="section-title text-center text-[48px] tracking-wide  text-highlight font-semibold">
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
          <ProjectCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
