"use client";

import { useState } from "react";
import "animate.css";
import useScrollAnimation from "../hook/useScrollAnimation";

export const Navbar: React.FC = () => {
  const { ref, inView } = useScrollAnimation();
  const navlink = [
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Contact",
    "Resume",
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main ref={ref} className="bg-[#1e1e1e]">
      <nav className="fixed top-0 left-0 w-full bg-[#1e1e1e] mb-12 z-30 py-2">
        <div className="md:max-w-[1168.1px] w-full mx-auto px-3 flex justify-between items-center">
          <div
            className="text-2xl font-bold"
            onClick={() => scrollToSection("home")}
          >
            <span
              className={`inline-grid mr-2 text-2xl text-white ${
                inView ? "animate-bounce-less" : "opacity-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="#FF9051"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-option cursor-pointer"
              >
                <path d="M3 3h6l6 18h6" />
                <path d="M14 3h7" />
              </svg>
            </span>
            <span className="text-white cursor-pointer">
              Damilola
              <p className="text-sm font-normal text-right mt-0 leading-[1.2] tracking-widest ">
                Yesifu
              </p>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6">
              {navlink.map((section) => (
                <li
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  className="hover:text-slate-400 text-[#E1E1E1] font-medium text-lg cursor-pointer"
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden ">
            <ul>
              {navlink.map((section) => (
                <li
                  key={section}
                  onClick={() => {
                    scrollToSection(section.toLowerCase());
                    setIsOpen(false);
                  }}
                  className="block px-4 py-2 hover:text-slate-400 text-[#E1E1E1] font-medium text-xl cursor-pointer"
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </main>
  );
};
