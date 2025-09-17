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
          I&apos;m a developer with experienced in building websites for small
          and medium enterprises. I specialize in creating responsive,
          user-friendly, and efficient web applications with a keen eye for
          detail and a focus on client satisfaction. Skills & Expertise
          Languages & Frameworks: HTML, CSS, JavaScript, TypeScript, React,
          Nextjs.
        </p>
        <p
          className={`text-2xl text-[#E1E1E1] font-thin font-inter text-left ${
            inView
              ? "animate__animated animate__fadeInTopRight  animate__slow"
              : "opacity-0"
          }`}
        >
          Full Project Management handle projects from start to finish, ensuring
          quality and timeliness at each stage. Clear Communication I believe in
          the importance of regular updates and keeping in touch throughout the
          development process, ensuring that your vision is fully realized.
        </p>
      </div>
    </section>
  );
};
