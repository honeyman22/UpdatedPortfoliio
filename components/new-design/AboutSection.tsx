import Image from "next/image";
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800">
              <Image
                src="/deleteable/npl/JAB.png"
                alt="Profile"
                className="w-full h-auto transform transition duration-500 group-hover:scale-105"
                height={500}
                width={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-neutral-800 rounded-full">
              <p className="text-primary-500 font-semibold">
                Frontend Developer
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white font-heading">
              Full-Stack Developer: Crafting Seamless, Scalable Web Applications
            </h3>

            <p className="text-neutral-300 leading-relaxed">
              As a full-stack developer, I work with both frontend and backend
              technologies to create seamless, dynamic web applications. On the
              frontend, I specialize in frameworks like React and Next.js,
              building responsive interfaces that enhance user experiences. On
              the backend, I use Node.js and NestJS to design efficient APIs and
              services. I&apos;m also skilled in working with PostgreSQL,
              ensuring my applications are data-driven and reliable. My
              experience with Docker helps me deploy applications smoothly
              across different environments. With a background in Software
              Engineering, I&apos;m passionate about logic, problem-solving, and
              system design, allowing me to create efficient, scalable, and
              maintainable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
