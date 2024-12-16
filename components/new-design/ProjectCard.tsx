import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export default function ProjectCard({
  project,
}: Readonly<{
  project: {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
  };
}>) {
  return (
    <div className="group relative rounded-xl border border-neutral-800 bg-neutral-800/50 overflow-hidden transition-all duration-300 hover:border-primary-500">
      <div className="relative aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          height={200}
          width={200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-300 line-clamp-4 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index + 3}
              className="px-3 py-1 bg-neutral-700 rounded-full text-sm text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={project.githubLink}
            className="text-primary-500 hover:text-primary-400"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.liveLink}
            className="text-primary-500 hover:text-primary-400"
          >
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
