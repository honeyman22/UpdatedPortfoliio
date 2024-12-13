import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";
import ExperienceTimeline from "./ExperienceTimeline";
const experiences = [
  {
    duration: "2022 - Present",
    role: "Senior Frontend Developer",
    company: "AITC International",
    icon: <FaBriefcase />,
    reverse: false,
    responsibilities: [
      "Led development of enterprise-level React applications",
      "Implemented CI/CD pipelines improving deployment efficiency by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    duration: "2020 - 2022",
    role: "Frontend Developer",
    company: "Ultimodeal Online Shopping",
    icon: <FaCode size={24} />,
    reverse: true,
    responsibilities: [
      "Developed responsive web applications using Vue.js",
      "Reduced loading times by 60% through optimization techniques",
      "Collaborated with UI/UX team to implement design systems",
    ],
  },
  {
    duration: "2019 - 2020",
    role: "Junior Web Developer",
    company: "Crown Innovations",
    icon: <FaLaptopCode />,
    reverse: false,
    responsibilities: [
      "Built and maintained client websites using HTML, CSS, and JavaScript",
      "Implemented responsive designs and cross-browser compatibility",
      "Assisted in migrating legacy systems to modern frameworks",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <ExperienceTimeline experiences={experiences} />

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <a
            href="/resume"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
          >
            <i className="fas fa-download mr-2"></i>
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
