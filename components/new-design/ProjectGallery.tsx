import ProjectCard from "./ProjectCard";
const projects = [
  {
    title: "Fertility Care Landing Page",
    description:
      "The Fertility Care Landing Page is a dedicated platform designed to provide individuals and couples with essential information, guidance, and support on their fertility journey. The page aims to create a warm, trustworthy, and user-friendly experience that reflects the sensitivity and care associated with fertility treatments.",
    image: "/deleteable/projects/fertilitycare.jpg",
    technologies: ["Next.js"],
    githubLink: "https://github.com/honeyman22/FertilityCare",
    liveLink: "https://fertility-care.vercel.app/",
  },
  // {
  //   title: "Task Manager",
  //   description: "Kanban-style task management application.",
  //   image: "/deleteable/npl/JAB.png",
  //   technologies: ["Vue.js", "Vuex"],
  //   githubLink: "#",
  //   liveLink: "#",
  // },
  // {
  //   title: "Chat Application",
  //   description: "Real-time messaging with WebSocket integration.",
  //   image: "/deleteable/npl/JAB.png",
  //   technologies: ["React", "Socket.io"],
  //   githubLink: "#",
  //   liveLink: "#",
  // },
  // {
  //   title: "Music Player",
  //   description: "Custom audio player with playlist management.",
  //   image: "/deleteable/npl/JAB.png",
  //   technologies: ["JavaScript", "Web Audio API"],
  //   githubLink: "#",
  //   liveLink: "#",
  // },
  // {
  //   title: "Portfolio Template",
  //   description: "Customizable portfolio website template.",
  //   image: "/deleteable/npl/JAB.png",
  //   technologies: ["Next.js", "Tailwind CSS"],
  //   githubLink: "#",
  //   liveLink: "#",
  // },
  // {
  //   title: "Recipe App",
  //   description: "Recipe search and management application.",
  //   image: "/deleteable/npl/JAB.png",
  //   technologies: ["React", "Firebase"],
  //   githubLink: "#",
  //   liveLink: "#",
  // },
];

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Project Gallery
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index + 6} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
