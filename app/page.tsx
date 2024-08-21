import HeroSection from "@/components/user/home/HeroSection";
import ProjectSection from "@/components/user/home/ProjectSection";
import LotusContainer from "@/components/user/skills/LotusContainer";

export default function Home() {
  const data = [
    {
      title: "Requirement analysis",
      image: "/static/home/Requirement analysis.svg",
      description:
        "Our team starts by understanding problems, client needs and finalizing project goals and specifications.",
    },
    {
      title: "System Architecture",
      image: "/static/home/system architecture.svg",
      description:
        "Our team will create a comprehensive roadmap outlining your system's structure, connections, and scalable technologies to ensure it grows with your needs.",
    },
    {
      title: "Wireframe and Design",
      image: "/static/home/wireframe and design.svg",
      description:
        "Our team turn your ideas into user-friendly mockups and work with you to refine them until they match your vision.",
    },
    {
      title: "Prototyping",
      image: "/static/home/prototyping.svg",
      description:
        "We build a basic, interactive version to test the look and feel before building the final product, allowing you to give feedback throughout the process.",
    },
    {
      title: "Development",
      image: "/static/home/development.svg",
      description:
        "With your approved design, our skilled developers build your system with care, focusing on quality, security, and the best coding practices.",
    },
    {
      title: "Testing",
      image: "/static/home/testing.svg",
      description:
        "This comprehensive approach guarantees flawless functionality, performance, and adherence to security compliance, providing you with peace of mind. ",
    },
    {
      title: "Deployment",
      image: "/static/home/deployment.svg",
      description:
        "The team carefully launches your project to ensure a smooth transition and a great user experience from the start. ",
    },
    {
      title: "Maintenance",
      image: "/static/home/maintainance.svg",
      description:
        "We stick with you beyond launch, offering updates and improvements to keep your project running smoothly and adapting to your changing needs. ",
    },
  ];
  return (
    <main className="flex  flex-col items-center justify-between ">
      <HeroSection />
      <ProjectSection />
      <LotusContainer data={data} />
    </main>
  );
}
