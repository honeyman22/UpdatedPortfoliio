import { projectCategory } from "@/utils/deleteable/project-section";
import ProjectCard from "./ProjectCard";
import { ProjectCategoryType } from "@/utils/types/dto";
import ReusableHeader from "@/components/common/ReusableHeader";

const ProjectSection = () => {
  return (
    <section className="project-section bg-secondary py-10 sm:py-20 px-4 sm:px-10  w-full">
      <ReusableHeader
        title="  My Expertise"
        message="Discover my range of professional services designed to help you
            achieve your business goals."
      />{" "}
      <div className="project-card-wrapper grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {projectCategory.map((category: ProjectCategoryType) => (
          <ProjectCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
