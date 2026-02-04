import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa6";
const SocialMediaLinks = () => {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.linkedin.com/in/nishan-bhattarai-software-engineer/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2] shadow-md hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="white"
          className="w-4 h-4"
        >
          <path d="M1.1 5.3h2.7V14H1.1V5.3zM2.45 1a1.56 1.56 0 110 3.12A1.56 1.56 0 012.45 1zM5.5 5.3h2.6v1.18h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1V14h-2.7V9.7c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28V14H5.5V5.3z" />
        </svg>
      </a>

      <a
        href="https://github.com/honeyman22"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#181717] shadow-md hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="white"
          className="w-4 h-4"
        >
          <path d="M8 0C3.58 0 0 3.73 0 8.33c0 3.68 2.29 6.8 5.47 7.9.4.08.55-.18.55-.39v-1.38c-2.23.5-2.7-1.1-2.7-1.1-.36-.95-.88-1.2-.88-1.2-.72-.5.05-.5.05-.5.8.06 1.23.86 1.23.86.71 1.27 1.86.9 2.31.69.07-.54.28-.9.5-1.1-1.78-.21-3.64-.92-3.64-4.1 0-.9.3-1.64.8-2.22-.08-.2-.35-1.02.08-2.13 0 0 .65-.21 2.15.82A7.2 7.2 0 018 4.8c.64 0 1.28.09 1.88.26 1.5-1.03 2.15-.82 2.15-.82.43 1.11.16 1.93.08 2.13.5.58.8 1.32.8 2.22 0 3.19-1.86 3.88-3.64 4.09.29.26.54.76.54 1.53v2.27c0 .22.15.48.55.39C13.71 15.13 16 12 16 8.33 16 3.73 12.42 0 8 0z" />
        </svg>
      </a>

      <a
        href="https://www.facebook.com/nishan.bhattarai.148400"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] shadow-md hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="white"
          className="w-4 h-4"
        >
          <path d="M16 8A8 8 0 1016 8zM9.33 8H7.9v5.2H5.7V8H4.5V6.1h1.2V5c0-2.1 1.25-3.2 3.08-3.2.87 0 1.62.06 1.84.09v2.2H9.53c-.97 0-1.15.46-1.15 1.13v1.48h2.3L9.33 8z" />
        </svg>
      </a>

      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-md hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="white"
          className="w-4 h-4"
        >
          <path d="M8 4.2a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6zm0 6.1a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6z" />
          <path d="M12.5 3.5a.9.9 0 11-1.8 0 .9.9 0 011.8 0z" />
          <path d="M4.2 1.5h7.6A2.7 2.7 0 0114.5 4.2v7.6a2.7 2.7 0 01-2.7 2.7H4.2a2.7 2.7 0 01-2.7-2.7V4.2a2.7 2.7 0 012.7-2.7zm0 1.4A1.3 1.3 0 002.9 4.2v7.6a1.3 1.3 0 001.3 1.3h7.6a1.3 1.3 0 001.3-1.3V4.2a1.3 1.3 0 00-1.3-1.3H4.2z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
