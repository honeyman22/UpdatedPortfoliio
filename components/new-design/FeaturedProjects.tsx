import FeatureProjectCard from "./FeatureProductCard";
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with React, Redux, and Stripe integration.",
    image: "/deleteable/npl/JAB.png",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Real-time analytics dashboard with dark mode and data visualization.",
    image: "/deleteable/npl/JAB.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured_projects" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <FeatureProjectCard key={index + 5} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
