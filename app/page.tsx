import BlogSection from "@/components/user/blog/BlogSection";
import ContactSection from "@/components/user/contact/ContactSection";
import EducationSection from "@/components/user/education/EducationSection";
import ExperienceSection from "@/components/user/experiences/ExperienceSection";
import HeroSection from "@/components/user/home/HeroSection";
import ProjectSection from "@/components/user/home/ProjectSection";
import SkillSection from "@/components/user/skills/SkillSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
      <ToastContainer />
    </main>
  );
}
