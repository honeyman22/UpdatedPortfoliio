import Image from "next/image";
export default function FeatureProjectCard({
  project,
}: Readonly<{ project: any }>) {
  return (
    <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-800/50 overflow-hidden transition-all duration-300 hover:border-primary-500">
      <Image
        src={project.image}
        alt={project.title}
        // className="w-full h-full object-cover"
        height={200}
        width={200}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Hello worlsd {project.title}
        </h3>
        <p className="text-neutral-300 mb-4">{project.description}</p>
      </div>
    </div>
  );
}
