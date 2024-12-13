export default function HeroSection() {
  return (
    <section
      id="navbar_hero"
      className="min-h-screen bg-neutral-900 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-32">
        <div className="relative z-10">
          <div className="mt-10 md:mt-16">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading">
                <span className="block">Frontend Developer</span>
                <span className="block text-primary-500 mt-3">
                  Crafting Digital Experiences
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-neutral-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Transforming creative ideas into seamless, responsive, and
                user-friendly web applications with modern technologies and best
                practices.
              </p>
              <div className="mt-5 max-w-md mx-auto gap-8 sm:flex sm:justify-center md:mt-8">
                <a
                  href="#projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-neutral-300 bg-neutral-800 hover:bg-neutral-700 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000080_1px,transparent_1px),linear-gradient(to_bottom,#00000080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  );
}
