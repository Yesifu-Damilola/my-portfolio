"use client";

import useScrollAnimation from "../../components/hook/useScrollAnimation";
import "animate.css";
import Image from "next/image";

export const HomePage = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className="md:max-w-[1168.1px] w-full flex flex-col mx-auto min-h-[70vh] md:min-h-[70vh] mt-40 items-center justify-center space-y-2"
      id="home"
    >
      <div>
        <Image
          src="/images/profile.jpg"
          alt="Profile picture"
          width={500}
          height={300}
          className={`w-[229px] h-[235px] rounded-full mx-auto ${
            inView
              ? "animate__animated animate__fadeInDownBig animate__slow"
              : "opacity-0"
          }`}
        />
      </div>
      <div className="text-center space-y-3">
        <h1
          className={`text-[#FFFFFF] font-bold text-[36px] md:text-[63.42px] font-poppins py-1 ${
            inView
              ? "animate__animated animate__fadeInTopLeft animate__slow"
              : "opacity-0"
          }`}
        >
          Damilola Yesifu!
        </h1>
        <p
          className={`font-semibold text-[22px] md:text-[26.11px] text-[#878787] font-poppins ${
            inView
              ? "animate__animated animate__fadeInTopRight animate__slow"
              : "opacity-0"
          }`}
        >
          I write clean code &
          <span className="text-[#FF9051] font-poppins"> take a break </span>
        </p>

        <p
          className={`font-medium text-[#E1E1E1] text-[22px] md:text-2xl text-center font-poppins ${
            inView
              ? "animate__animated animate__fadeInUpBig animate__slow"
              : "opacity-0"
          }`}
        >
          Passionate Software Developer with a focus on React development,
          <br className="hidden md:block" />
          dedicated to crafting elegant and user-friendly mobile applications.
        </p>
      </div>
      <div
        className={`text-center ${
          inView ? "animate-bounce-less" : "opacity-0"
        }`}
      >
        <a
          href="mailto:yesifudamilolamax@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border-[#585858] bg-[#9C83FF] text-[#FFFFFF] font-medium text-xl px-16 py-3 rounded-full mt-3 font-poppins">
            Contact Me
          </button>
        </a>
      </div>
    </section>
  );
};
