import { link } from "fs";
import { list } from "postcss";

export const educations = [
  {
    id: 1,
    image: "",
    name: "Shree Jana Jagriti Higher Seconday School",
    address: "Jeetpur-Simara-16 , Sakhuwaghat ,Bara",
    subtitle: "From 2004 to 2014",
    rank: "SLC (First Division (78%))",
  },
  {
    id: 2,
    name: "Kathmandu Modal Higher Secondary School",
    address: "Bagbazar, Kathmandu, Nepal",
    subtitle: "From 2014 to 2016",
    rank: "+2 Science (First Division (68%))",
    image: "/edu/kmccollege.webp",
  },
  {
    id: 3,
    name: "Nepal College of Information Technology",
    address: "Balkumari, Lalitpur, Nepal",
    subtitle: "From 2016 to 2023",
    rank: "Bachelor in Software Engineering (2.8 CGPA)",
    image: "/edu/NCIT_LOGO.webp",
  },
];
export const experiences = [
  {
    id: 1,
    company: "AITC International Pvt. Ltd.",
    link: "https://aitc.ai/",
    address: "Bhaktapur, Nepal",
    subtitle: "Oct 2022 to Sept 2025 ",
    position: "Frontend Developer",
    image: "/exprience/aitc.png",
    listItems: [
      "Developed reusable and modular components, reducing code duplication by 20% and improving maintainability and scalability of the codebase, while leading code reviews to foster team learning and enforce high-quality coding standards.",

      "Collaborated with designers, product managers, and stakeholders to deliver user-focused web interfaces, launching 75+ production features, resulting in a 15 to 20% increase in user engagement.",

      "Optimized UI performance using HTML, CSS, JavaScript, React, and Next.js, achieving a 15% improvement in page load times and smoother interactions across devices and browsers.",

      "Implemented accessibility best practices (WCAG 2.1) to ensure inclusive user experiences, improving accessibility compliance across all web pages by ~90%.",

      "Enhanced usability by conducting usability testing and incorporating feedback, contributing to a 10 to 15% increase in user satisfaction metrics.",

      "Monitored and adopted emerging frontend technologies and performance best practices, sharing insights with the team to continuously improve product quality.",
    ],
  },
  {
    id: 2,
    company: "Ultimodeal Online Shopping",
    address: "Kathmandu, Nepal",
    subtitle: "Aug 2021 to Aug 2022",
    position: "Frontend Developer",
    link: "https://ultimodeal.com/",
    image: "/exprience/ultimodeal.png",
    listItems: [
      "Implemented responsive web pages using HTML, CSS, and JavaScript, achieving a 10–15% improvement in page load speed.",

      "Debugged and optimized layouts across browsers, resulting in a 15–20% increase in cross-browser compatibility.",

      "Collaborated with the team using Git for version control, streamlining workflow and reducing merge conflicts by ~25%.",

      "Translated design concepts into fully functional web interfaces, strengthening frontend development skills and understanding of UI/UX principles.",

      "Gained hands-on experience with component-based architecture and modern frontend workflows, laying a solid foundation for future projects.",
    ],
  },
];
