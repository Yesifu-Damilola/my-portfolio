"use client"

import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import useScrollAnimation from "../../components/hook/useScrollAnimation";
import "animate.css";
import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import Link from "next/link";

export const Contact = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className="w-full max-w-3xl mx-auto my-14" id="contact">
      <WhatsAppButton />
      <div
        className={`py-4 flex items-center justify-center gap-6 ${
          inView ? "animate-bounce-less" : "opacity-0"
        }`}
      >
        <Link
          href="https://github.com/Yesifu-Damilola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="text-[#FF9051] w-8 h-8 sm:w-8 sm:h-8" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/yesifu-damilola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="text-[#FF9051] w-8 h-8 sm:w-8 sm:h-8" />
        </Link>

        <Link
          href="https://x.com/YesifuM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="text-[#FF9051] w-8 h-8 sm:w-8 sm:h-8" />
        </Link>

        <Link
          href="https://www.instagram.com/yesifudamilola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="text-[#FF9051] w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
      </div>
      <div className="pb-5">
        <p className="text-lg text-[#E1E1E1] font-medium text-center mx-auto  font-inter">
          Loosely designed in Figma and coded in Visual Studio Code by yours
          truly. Built with Reactjs, TypeScript and Tailwind CSS, deployed with
          Vercel. All text is set in the Inter typeface.
        </p>
      </div>
    </section>
  );
};
