"use client";

import useScrollAnimation from "../../components/hook/useScrollAnimation";
import "animate.css";

export const Experience = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className="w-full max-w-3xl mx-auto min-h-[70vh] md:min-h-[46vh] flex flex-col justify-center"
      id="experience"
    >
      <div className="py-4 text-center">
        <h1 className="text-[#FFFFFF] text-[36px] md:text-[45px] font-extrabold font-inter">
          Experience
        </h1>
        <div className={`${inView ? "animate-bounce-less" : "opacity-0"}`}>
          <span className="text-xl tracking-[.5em] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] font-inter">
            Explore Now
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-3 space-y-2 ">
        <p className="font-semibold text-lg text-[#FFFFFF] font-inter">
          MYVAMSNET /<span className="font-semibold"> Frontend Developer </span>
        </p>
        <p className="text-lg md:text-xl leading-[100%] text-[#E1E1E1] font-medium">
          JUNE 2024 - PRESENT, MYVAMSNET LTD
        </p>
      </div>

      <div className="space-y-6">
        <p
          className={`text-2xl text-[#E1E1E1] font-thin font-inter text-left ${
            inView
              ? "animate__animated animate__fadeInTopLeft  animate__slow"
              : "opacity-0"
          }`}
        >
          Collaborated with back-end developers and product designers to enhance
          usability, utilized Git and GitHub for version control in a team
          environment, gathered feedback to build user-centric solutions, and
          resolved web app issues and bugs. Engaged in pair programming with
          colleagues, managed projects to develop high-performing platforms with
          optimal frameworks, and integrated RESTful APIs for enhanced
          functionality. Translated wireframes into functional code, ensuring
          seamless user experiences, improved development plans to meet client
          requirements within deadlines, and ensured cross-browser and
          cross-platform compatibility. Additionally, enhanced site performance
          using advanced React.js techniques.
        </p>

        <p
          className={`text-2xl text-[#E1E1E1] font-thin font-inter text-left ${
            inView
              ? "animate__animated animate__fadeInTopRight  animate__slow"
              : "opacity-0"
          }`}
        >
          My experience with React has allowed me to develop responsive design
          both on desktop and mobile. Additionally, my proficiency in React.js
          has equipped me with the skills to create fast, scalable, and dynamic
          web pages with excellent user experiences. I have a deep understanding
          of component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies
          using the tools below.
        </p>
      </div>

      <div
        className={`md:flex block gap-2 mt-5 items-center justify-center  ${
          inView ? "animate-bounce-less" : "opacity-0"
        } `}
      >
        {["JavaScript", "TypeScript", "React", "Nextjs"].map((skill) => (
          <div
            key={skill}
            className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] rounded-full p-[2px] w-full  md:w-[200px] my-6"
          >
            <button className="text-xl text-[#E1E1E1] font-thin text-center bg-[#1e1e1e] md:py-1 md:px-4 px-7 py-4 w-full rounded-full font-inter">
              {skill}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
