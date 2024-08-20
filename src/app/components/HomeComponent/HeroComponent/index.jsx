"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const HeroComponent = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end end"],
  });

  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 0.8 ? "relative" : "sticky";
  });
  const heroHeadingTextOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    [1, 0.5, 0]
  );
  const heroHeadingTextY = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["0rem", "0rem", "-2rem"]
  );

  const scaleMainImage = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
    [1, 1, 1, "1.1", "1.2", "1.3"]
  );

  const mainImageMoveBottom = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
    ["10%", "15%", "20%", "25%", "40%", "50%"]
  );

  const secondSectionHeadingTextOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0]
  );
  const secondSectionHeadingTextY = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.5],
    ["0rem", "0rem", "-2rem"]
  );

  const thirdSectionHeadingTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.6, 0.7, 0.75],
    [0, 0, 1, 0.5, 0]
  );
  const thirdSectionHeadingTextY = useTransform(
    scrollYProgress,
    [0.1, 0.55, 0.6, 0.75],
    ["0rem", "0rem", "0rem", "-2rem"]
  );

  const addShadowOnMainImage = useTransform(
    scrollYProgress,
    [0, 0.55, 0.7],
    ["1", "rgba(0,0,0,.3)", "rgba(0,0,0,.3)"]
  );

  const mainImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 1, 0]
  );
  const mainImageY = useTransform(
    scrollYProgress,
    [0.75, 1],
    ["-2rem", "-6rem"]
  );

  return (
    <>
      <section ref={heroRef} className="h-[800vh] bg-[#fff]">
        <motion.div style={{ position }} className=" top-[20%]">
          <div className=" flex">
            <motion.div
              className="flex-1 pl-16"
              style={{ opacity: heroHeadingTextOpacity, y: heroHeadingTextY }}
            >
              <h1 className="text-8xl leading-12 font-bold text-gray-900 leading-[7rem] mb-6">
                Find any <br /> products <br /> by image
              </h1>
              <div className="flex space-x-4 mt-[3rem]">
                <button className="bg-[#FACB7E] text-black px-4 py-2 rounded-full flex items-center">
                  Try it now
                  <span className="ml-2">
                    <img
                      className="w-6"
                      src="/assets/images/search.svg"
                      alt="search-icon"
                    />
                  </span>
                </button>
                <button className="border-[3px] border-gray-200 text-gray-900 px-4 py-2 rounded-full flex items-center">
                  Watch video
                  <span className="ml-2">
                    <img
                      src="/assets/images/Play.svg"
                      className="w-4"
                      alt="play-icon"
                    />
                  </span>
                </button>
              </div>
            </motion.div>

            <div className="flex mt-[-5%] gap-[20px] items-center mr-[2%]">
              <motion.div
                style={{ opacity: heroHeadingTextOpacity, y: heroHeadingTextY }}
              >
                <HeroImageFlipableCard />
              </motion.div>
              <div className="flex relative flex-col gap-[20px]">
                <motion.div
                  style={{
                    scale: scaleMainImage,
                    transformOrigin: "right center",
                    marginTop: mainImageMoveBottom,
                    y: mainImageY,
                    opacity: mainImageOpacity,
                  }}
                  className="rounded-[20px] relative w-[220px] h-[300px] overflow-hidden "
                >
                  <img
                    className="w-100 h-100 "
                    src={"/assets/images/ban-i-2.svg"}
                    alt={"/assets/images/ban-i-2.svg"}
                  />
                  <motion.div
                    // style={{
                    //   background: addShadowOnMainImage,
                    // }}
                    class={`absolute w-[100%] h-[100%]  inset-0`}
                  ></motion.div>
                </motion.div>

                <motion.div
                  style={{
                    opacity: heroHeadingTextOpacity,
                    y: heroHeadingTextY,
                  }}
                >
                  <HeroImageFlipableCard />
                </motion.div>
              </div>
              <div className="flex flex-col gap-[20px] mb-[20%]">
                <motion.div
                  style={{
                    opacity: heroHeadingTextOpacity,
                    y: heroHeadingTextY,
                  }}
                >
                  <HeroImageFlipableCard />
                </motion.div>
                <motion.div
                  style={{
                    opacity: heroHeadingTextOpacity,
                    y: heroHeadingTextY,
                  }}
                >
                  <HeroImageFlipableCard />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-[50%] pl-16">
            <motion.h1
              className="text-6xl  font-bold text-gray-900 leading-[5rem] mt-[-85%]"
              style={{
                opacity: secondSectionHeadingTextOpacity,
                y: secondSectionHeadingTextY,
              }}
            >
              Upload an image or take photo using the app
            </motion.h1>

            <motion.p
              className="text-gray-900 mt-[40px]"
              style={{
                opacity: secondSectionHeadingTextOpacity,
                y: secondSectionHeadingTextY,
              }}
            >
              Discover and compare products instantly across numerous
              marketplaces with just a photo. We are simplifies your shopping
              experience by bridging the gap between you and the perfect find.
            </motion.p>
          </div>

          <div className="w-[50%] pl-16">
            <motion.h1
              className="text-6xl  font-bold text-gray-900 leading-[5rem] mt-[-55%]"
              style={{
                opacity: thirdSectionHeadingTextOpacity,
                y: thirdSectionHeadingTextY,
              }}
            >
              Don't just search,find every details
            </motion.h1>

            <motion.p
              className="text-gray-900 mt-[60px]"
              style={{
                opacity: thirdSectionHeadingTextOpacity,
                y: thirdSectionHeadingTextY,
              }}
            >
              Discover and compare products instantly across numerous
              marketplaces with just a photo. We are simplifies your shopping
              experience by bridging the gap between you and the perfect find.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroComponent;

const HeroImageFlipableCard = ({ imageUrl = "/assets/images/ban-i-2.svg" }) => {
  return (
    <>
      <div className="rounded-[20px]  w-[220px] h-[300px] overflow-hidden">
        <img className="w-100 h-100" src={imageUrl} alt={imageUrl} />
      </div>
    </>
  );
};
