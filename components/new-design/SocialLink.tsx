import Link from "next/link";import { FaGithub, FaLinkedin } from "react-icons/fa";
const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/honeyman22" },
  {
    icon: <FaLinkedin />,
    href: "https://np.linkedin.com/in/nishan-bhattarai-4529b9235",
  },
  // { icon: <FaTwitter />, href: "#" },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <Link
          key={index + 5}
          href={link.href}
          target="_blank"
          className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
