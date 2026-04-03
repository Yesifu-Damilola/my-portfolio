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
        <p className="text-lg md:text-xl leading-[100%] text-[#E1E1E1] font-medium text-start">
          WORK HISTORY
        </p>
        <p
          className={`text-2xl text-[#E1E1E1] font-thin font-inter text-left ${
            inView
              ? "animate__animated animate__fadeInTopLeft  animate__slow"
              : "opacity-0"
          }`}
        >
          <ul>
            <li>
              • Led frontend development for business web applications,
              including a financial management platform (mymtrackr), serving
              real users and business needs
            </li>
            <li>
              • Built scalable applications using React, TypeScript, and
              Next.js, improving code maintainability and reducing development
              time by 25%
            </li>
            <li>
              • Leveraged Server and Client Components to optimize rendering
              strategies, improving performance, SEO, and initial load time
            </li>
            <li>
              • Developed responsive UI systems with Tailwind CSS, ensuring
              consistent design across mobile, tablet, and desktop (100%
              responsiveness)
            </li>
          </ul>
        </p>

        <p
          className={`text-2xl text-[#E1E1E1] font-thin font-inter text-left ${
            inView
              ? "animate__animated animate__fadeInTopRight  animate__slow"
              : "opacity-0"
          }`}
        >
          <ul>
            <li>
              • Integrated 10+ RESTful APIs, enabling real-time data flow and
              enhancing application functionality
            </li>
            <li>
              • Optimized application performance by 30–40% through lazy
              loading, code splitting, and efficient state management (TanStack
              Query)
            </li>
            <li>
              • Improved data fetching efficiency by utilizing server-side
              rendering (SSR) and static generation (SSG) where appropriate
            </li>
            <li>
              • Collaborated with backend developers and designers to deliver
              features on time, increasing overall team productivity
            </li>
            <li>
              • Reduced UI bugs and inconsistencies by 40%+ by implementing
              reusable component architecture and improved state handling
            </li>
          </ul>
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
