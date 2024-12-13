import Link from "next/link";import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const socialLinks = [
  { icon: <FaGithub />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <Link
          key={index + 5}
          href={link.href}
          className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
