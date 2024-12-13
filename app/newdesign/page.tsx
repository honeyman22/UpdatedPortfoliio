import AboutSection from "@/components/new-design/AboutSection";import ExperienceSection from "@/components/new-design/ExperienceSection";
import FeaturedProjects from "@/components/new-design/FeaturedProjects";
import HeroSection from "@/components/new-design/HeroSection";
import ProjectGallery from "@/components/new-design/ProjectGallery";
import SkillsSection from "@/components/new-design/SkillsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ProjectGallery />
      <ExperienceSection />
    </>
  );
}
