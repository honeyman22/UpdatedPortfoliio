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
              Passionate about Creating Exceptional User Experiences
            </h3>

            <p className="text-neutral-300 leading-relaxed">
              With a keen eye for design and a love for clean code, I specialize
              in building modern web applications that not only look great but
              also deliver outstanding performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
