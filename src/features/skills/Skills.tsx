// "use client";

// import Image from "next/image";
// import useScrollAnimation from "@/components/hook/useScrollAnimation";
// import html from "/images/html.png";
// import css from "/images/css.png";
// import tailwind from "/images/tailwind-css.png";
// import nextjs from "/images/nextjs.webp";
// import js from "/images/js.png";
// import typescript from "/images/typescript.png";
// import react from "/images/react.png";

// import "animate.css";

// export const Skills = () => {
//   const { ref, inView } = useScrollAnimation();

//   return (
//     <section
//       ref={ref}
//       className="w-full max-w-3xl mx-auto min-h-[70vh] md:min-h-[70vh] flex flex-col justify-center py-6 md:py-0"
//       id="skills"
//     >
//       <div className="py-4 text-center">
//         <h1 className="text-[#FFFFFF] text-[36px] md:text-[45px] font-extrabold font-inter">
//           Skills
//         </h1>
//         <div className={`${inView ? "animate-bounce-less" : "opacity-0"}`}>
//           <span className="text-xl tracking-[.5em] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] font-inter">
//             Explore Now
//           </span>
//         </div>
//       </div>
//       <div className="space-y-5">
//         <p
//           className={`text-[22px] text-white font-thin font-inter text-center ${
//             inView
//               ? "animate__animated animate__backInDown  animate__slower"
//               : "opacity-0"
//           }`}
//         >
//           I design, develop, and deliver web applications using these powerful
//           tools.
//         </p>
//         <ul className="text-xl list-disc list-inside text-[#E1E1E1] space-y-2 font-inter text-left font-thin">
//           <li
//             className={`${
//               inView
//                 ? "animate__animated animate__backInUp  animate__slower"
//                 : "opacity-0"
//             }`}
//           >
//             <strong>HTML5</strong>: Crafting semantic, accessible, and
//             SEO-friendly web structures.
//           </li>
//           <li
//             className={`${
//               inView
//                 ? "animate__animated animate__backInLeft  animate__slower"
//                 : "opacity-0"
//             }`}
//           >
//             <strong>CSS3</strong>: Styling web pages with modern layouts,
//             animations, and responsiveness.
//           </li>
//           <li
//             className={`${
//               inView
//                 ? "animate__animated animate__backInRight  animate__slower"
//                 : "opacity-0"
//             }`}
//           >
//             <strong>Tailwind CSS</strong>: Designing responsive and modern UIs
//             with utility-first classes.
//           </li>
//           <li
//             className={`${
//               inView
//                 ? "animate__animated animate__fadeInTopLeft  animate__slower"
//                 : "opacity-0"
//             }`}
//           >
//             <strong>JavaScript</strong>: Developing interactive and dynamic web
//             applications with ES6+ features.
//           </li>
//           <li
//             className={`${
//               inView
//                 ? "animate__animated animate__fadeInTopRight  animate__slower"
//                 : "opacity-0"
//             }`}
//           >
//             <strong>TypeScript</strong>: Writing scalable, type-safe code for
//             robust application development.
//           </li>
//           <li
//             className={`${
//               inView
//                 ? "animate__animated animate__fadeInBottomRight animate__slower"
//                 : "opacity-0"
//             }`}
//           >
//             <strong>React.js</strong>: Creating component-based, performant, and
//             user-focused web solutions.
//           </li>
//           <li
//             className={`${
//               inView
//                 ? "animate__animated animate__backInDown  animate__slower"
//                 : "opacity-0"
//             }`}
//           >
//             <strong>Next.js</strong>: Enhancing React applications with
//             server-side rendering and optimized performance.
//           </li>
//         </ul>
//       </div>
//       <div
//         className={`md:flex block gap-2 mt-5 md:text-left text-center ${
//           inView ? "animate-bounce-less" : "opacity-0"
//         } `}
//       >
//         {[
//           { name: "HTML5", img: html },
//           { name: "CSS3", img: css },
//           { name: "Tailwindcss", img: tailwind },
//           { name: "JavaScript", img: js },
//           { name: "Typescript", img: typescript },
//           { name: "React.js", img: react },
//           { name: "Next.js", img: nextjs },
//         ].map((skill) => (
//           <div
//             key={skill.name}
//             className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] rounded-full p-[2px] w-full md:w-[350px] my-6"
//           >
//             <button className="flex items-center justify-center gap-2 text-xl  text-[#E1E1E1] font-thin bg-[#1e1e1e] md:py-1 md:px-5 px-7 py-3 w-full rounded-full font-inter ">
//               <Image
//                 src={skill.img}
//                 alt={`${skill.name} icon`}
//                 className="w-7 h-7 md:w-5 md:h-5"
//               />
//               {skill.name}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

"use client";

import Image from "next/image";
import useScrollAnimation from "@/components/hook/useScrollAnimation";
import "animate.css";

export const Skills = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="w-full max-w-3xl mx-auto min-h-[70vh] md:min-h-[70vh] flex flex-col justify-center py-6 md:py-0"
      id="skills"
    >
      {/* Title */}
      <div className="py-4 text-center">
        <h1 className="text-[#FFFFFF] text-[36px] md:text-[45px] font-extrabold font-inter">
          Skills
        </h1>
        <div className={`${inView ? "animate-bounce-less" : "opacity-0"}`}>
          <span className="text-xl tracking-[.5em] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] font-inter">
            Explore Now
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-5">
        <p
          className={`text-[22px] text-white font-thin font-inter text-center ${
            inView
              ? "animate__animated animate__backInDown animate__slower"
              : "opacity-0"
          }`}
        >
          I design, develop, and deliver web applications using these powerful
          tools.
        </p>

        {/* List of Skills */}
        <ul className="text-xl list-disc list-inside text-[#E1E1E1] space-y-2 font-inter text-left font-thin">
          <li
            className={`${
              inView
                ? "animate__animated animate__backInUp animate__slower"
                : "opacity-0"
            }`}
          >
            <strong>HTML5</strong>: Crafting semantic, accessible, and
            SEO-friendly web structures.
          </li>
          <li
            className={`${
              inView
                ? "animate__animated animate__backInLeft animate__slower"
                : "opacity-0"
            }`}
          >
            <strong>CSS3</strong>: Styling web pages with modern layouts,
            animations, and responsiveness.
          </li>
          <li
            className={`${
              inView
                ? "animate__animated animate__backInRight animate__slower"
                : "opacity-0"
            }`}
          >
            <strong>Tailwind CSS</strong>: Designing responsive and modern UIs
            with utility-first classes.
          </li>
          <li
            className={`${
              inView
                ? "animate__animated animate__fadeInTopLeft animate__slower"
                : "opacity-0"
            }`}
          >
            <strong>JavaScript</strong>: Developing interactive and dynamic web
            applications with ES6+ features.
          </li>
          <li
            className={`${
              inView
                ? "animate__animated animate__fadeInTopRight animate__slower"
                : "opacity-0"
            }`}
          >
            <strong>TypeScript</strong>: Writing scalable, type-safe code for
            robust application development.
          </li>
          <li
            className={`${
              inView
                ? "animate__animated animate__fadeInBottomRight animate__slower"
                : "opacity-0"
            }`}
          >
            <strong>React.js</strong>: Creating component-based, performant, and
            user-focused web solutions.
          </li>
          <li
            className={`${
              inView
                ? "animate__animated animate__backInDown animate__slower"
                : "opacity-0"
            }`}
          >
            <strong>Next.js</strong>: Enhancing React applications with
            server-side rendering and optimized performance.
          </li>
        </ul>
      </div>

      {/* Skill Icons */}
      <div
        className={`md:flex block gap-2 mt-5 md:text-left text-center ${
          inView ? "animate-bounce-less" : "opacity-0"
        }`}
      >
        {[
          { name: "HTML5", img: "/images/html.png" },
          { name: "CSS3", img: "/images/css.png" },
          { name: "Tailwindcss", img: "/images/tailwind-css.png" },
          { name: "JavaScript", img: "/images/js.png" },
          { name: "Typescript", img: "/images/typescript.png" },
          { name: "React.js", img: "/images/react.png" },
          { name: "Next.js", img: "/images/nextjs.webp" },
        ].map((skill) => (
          <div
            key={skill.name}
            className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] rounded-full p-[2px] w-full md:w-[350px] my-6"
          >
            <button className="flex items-center justify-center gap-2 text-xl text-[#E1E1E1] font-thin bg-[#1e1e1e] md:py-1 md:px-5 px-7 py-3 w-full rounded-full font-inter">
              <Image
                src={skill.img}
                alt={`${skill.name} icon`}
                width={28}
                height={28}
                className="w-7 h-7 md:w-5 md:h-5"
              />
              {skill.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
