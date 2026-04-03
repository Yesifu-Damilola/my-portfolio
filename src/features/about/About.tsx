"use client";

import useScrollAnimation from "../../components/hook/useScrollAnimation";
import "animate.css";

export const About = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className="w-full max-w-3xl mx-auto min-h-[70vh] md:min-h-[46vh] flex flex-col items-center justify-center "
      id="about"
    >
      <div className="py-4">
        <h1 className="text-[#FFFFFF] text-3xl md:text-4xl lg:text-5xl font-extrabold text-center font-inter">
          About Me
        </h1>
        <div className={`${inView ? "animate-bounce-less" : "opacity-0"}`}>
          <span className="text-xl tracking-[.5em] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] font-inter">
            Explore Now
          </span>
        </div>
      </div>
      <div className="space-y-6">
        <p
          className={`text-2xl text-[#E1E1E1] font-thin font-inter text-left ${
            inView
              ? "animate__animated animate__fadeInTopLeft  animate__slow"
              : "opacity-0"
          }`}
        >
          A highly skilled and detail-oriented Frontend Developer with strong
          expertise in HTML, CSS, JavaScript, React, Next.js, TypeScript, and
          Tailwind CSS. Proven ability to design and build responsive,
          userfriendly interfaces while efficiently integrating RESTful APIs to
          deliver seamless and engaging user experiences.
        </p>
        <p
          className={`text-2xl text-[#E1E1E1] font-thin font-inter text-left ${
            inView
              ? "animate__animated animate__fadeInTopRight  animate__slow"
              : "opacity-0"
          }`}
        >
          Recognized for creative problem-solving and sharp critical-thinking
          skills, alongside a solid command of Git for effective version control
          and collaboration. Passionate about leveraging modern web technologies
          to develop innovative, scalable, and high-performing solutions that
          meet both user and business needs.
        </p>
      </div>
    </section>
  );
};
