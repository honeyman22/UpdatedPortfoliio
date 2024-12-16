"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative z-50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#" className="text-white font-bold text-xl">
              Portfolio
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a
              href="#about"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="/deleteable/projects/resume.pdf"
              download="Resume.pdf"
              className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden bg-neutral-800/80 backdrop-blur-lg"
          id="mobile-menu"
        >
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700"
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700"
          >
            Contact
          </a>
          <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary-500 text-white hover:bg-primary-600">
            Resume
          </button>
        </div>
      )}
    </nav>
  );
}
