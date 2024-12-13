const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript/ES6+", level: 90 },
      { name: "React.js", level: 85 },
    ],
  },
  {
    category: "UI/UX Design",
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "User Experience", level: 80 },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Webpack/Vite", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index + 5}
              className="p-6 bg-neutral-800/50 rounded-xl border border-neutral-700 hover:border-primary-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-white">
                {skillGroup.category}
              </h3>
              {skillGroup.skills.map((skill, idx) => (
                <div key={idx + 6}>
                  <p className="text-neutral-300">{skill.name}</p>
                  <div className="w-full bg-neutral-700 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
