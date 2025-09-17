import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
// import mymtrackr from "/images/mymtrackr.png";
// import iPhoneApp from "/images/iPhoneApp.png";
// import staycation from "/images/staycation.png";
// import thriveagency from "/images/thriveagency.png";
// import cozzipay from "/images/cozzipay.png";
// import cryptolandingpage from "/images/cryptolandingpage.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-3xl mx-auto min-h-[70vh] md:min-h-[46vh] flex flex-col justify-center "
    >
      <div className="py-5 md:py-0">
        <h1 className="text-[#FFFFFF] text-3xl md:text-4xl lg:text-[45px] font-extrabold text-center font-inter mb-2">
          Projects
        </h1>
        <div>
          <span className="text-xl tracking-[.5em] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] font-inter">
            Explore Now
          </span>
        </div>
      </div>

      <div className="w-full mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
          {/* === Project 1 === */}

          <div className="my-5">
            <Fade direction="left">
              <Image
                src="/images/mymtrackr.png"
                alt="mymtrackr"
                width={500}
                height={300}
                className="rounded-lg border-2 border-[#9C83FF] w-full h-auto transition-opacity duration-500"
              />
              <div className="py-1">
                <Link
                  href="https://www.mymtrackr.com/"
                  className="text-lg font-extrabold font-inter text-[#9C83FF]"
                >
                  mymtrackr.com
                </Link>
              </div>
              <p className="text-[#878787] font-medium text-lg md:text-xl font-inter text-left">
                Designed a sleek and modern UI website with an extensive
                interface, seamlessly integrating a blog using Next.js.
              </p>
            </Fade>
          </div>

          {/* === Project 2 === */}

          <div className="my-5">
            <Fade direction="down">
              <Image
                src="/images/iPhoneApp.png"
                alt="iPhoneApp"
                width={500}
                height={300}
                className="rounded-lg border-2 border-[#9C83FF] w-full h-auto"
              />
              <div className="py-1">
                <Link
                  href="https://iphone-store-alpha.vercel.app/"
                  className="text-lg font-extrabold font-inter text-[#9C83FF]"
                >
                  E-Commerce App
                </Link>
              </div>
              <p className="text-[#878787] font-medium text-lg md:text-xl font-inter text-left">
                Created a visually appealing and dynamic UI website with a rich
                user experience, incorporating a blog using React.js.
              </p>
            </Fade>
          </div>

          {/* === Project 3 === */}

          <div className="my-5">
            <Fade direction="up">
              <Image
                src="/images/cozzipay.png"
                alt="CozziPay"
                className="rounded-lg border-2 border-[#9C83FF] w-full h-auto"
                width={500}
                height={300}
              />
              <div className="py-1">
                <Link
                  href="https://www.cozzipay.com/"
                  className="text-lg font-extrabold font-inter text-[#9C83FF]"
                >
                  Cozzipay.com
                </Link>
              </div>
              <p className="text-[#878787] font-medium text-lg md:text-xl font-inter text-left">
                Built a modern, performance-driven interface that ensures
                intuitive navigation and high usability with Next.js
              </p>
            </Fade>
          </div>

          {/* === Project 4 === */}

          <div className="mb-5">
            <Fade direction="up">
              <Image
                src="/images/staycation.png"
                alt="StayCation"
                width={500}
                height={300}
                className="rounded-lg border-2 border-[#9C83FF] w-full h-auto"
              />
              <div className="py-1">
                <Link
                  href="https://staycation-nu.vercel.app/"
                  className="text-lg font-extrabold font-inter text-[#9C83FF]"
                >
                  StayCation App
                </Link>
              </div>
              <p className="text-[#878787] font-medium text-lg md:text-xl font-inter text-left">
                Developed a sophisticated and user-friendly UI website,
                seamlessly integrating a blog with React.js.
              </p>
            </Fade>
          </div>

          {/* === Project 5 === */}

          <div className="mb-5">
            <Fade direction="down">
              <Image
                src="/images/thriveagency.png"
                alt="Thrive agency"
                className="rounded-lg border-2 border-[#9C83FF] w-full h-auto"
                width={500}
                height={300}
              />
              <div className="py-1">
                <Link
                  href="https://thrive-agency-inc.vercel.app/"
                  className="text-lg font-extrabold font-inter text-[#9C83FF]"
                >
                  Thrive Agency
                </Link>
              </div>
              <p className="text-[#878787] font-medium text-lg md:text-xl font-inter text-left">
                Developed a sleek and interactive UI, optimized for speed,
                accessibility, and cross-device compatibility with React.js.
              </p>
            </Fade>
          </div>

          {/* === Project 6 === */}

          <div className="mb-5">
            <Fade direction="right">
              <Image
                src="/images/cryptolandingpage.png"
                alt="CryptoLandingPage"
                className="rounded-lg border-2 border-[#9C83FF] w-full h-auto"
                width={500}
                height={300}
              />
              <div className="py-1">
                <Link
                  href="https://crypto-landing-page-sable-rho.vercel.app/"
                  className="text-lg font-extrabold font-inter text-[#9C83FF]"
                >
                  CryptoLandingPage
                </Link>
              </div>
              <p className="text-[#878787] font-medium text-lg md:text-xl font-inter text-left">
                Crafted a cutting-edge UI website with a smooth user experience,
                integrating a blog using React.js.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
