"use client";
import Link from "next/link";
import Nav from "./Nav";
import { motion, AnimatePresence, spring } from "framer-motion";
import { useState } from "react";

const heading1 = "Creative";
const heading2 = "Web Developer";

export default function Hero() {
  const textRoundAnimation = {
    hidden: { opacity: 0, scale: 0, x: 20, y: 70 },
    enter: {
      opacity: 1,
      scale: 0.9,
      x: 0,
      y: 0,
      rotate: -360,
      transition: { type: "spring", stiffness: 80, delay: 0.5 },
    },
    hovered: {
      rotate: 360,
      transition: { duration: 8, ease: "linear", repeat: Infinity },
    },
  };


  const emojiVariants = {
    hidden: {
        opacity: 0,
        x: -10 
    },
    visible: {
        opacity: 1,
        x: 5,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 30
        }
    }
};
 

  const [isHovered, setIsHovered] = useState(false);
  const textRound = isHovered ? {} : textRoundAnimation.hovered;

  const headerAnimation = {
    hidden: { opacity: 0, y: 60, x: 10 },
    visible1: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    visible2: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", stiffness: 110, delay: 0.3 },
    },
    bg: {
      backgroundColor: "#0d0101",
      color: "#ffffff",
      transition: { duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] },
    },
  };

  const entryAnimation = {
    hidden: { opacity: 0, y: 30 },
    slideIn: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, delay: 0.5 },
    },
  };

  return (
    <div className="h-screen w-full flex flex-col px-16 py-8 z-10  max-w-[120rem] mx-auto">
      <Nav />
      <div className="relative flex-grow w-full flex flex-col items-center justify-center ">
        {/* TEXT CIRCLE */}
        <div className="absolute top-[10vh] right-[5vw] xl:right-[12vw] xl:top-[2vh]">
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            variants={textRoundAnimation}
            initial="hidden"
            animate="enter"
            className="hidden md:inline-block cursor-default"
          >
            <motion.svg
              animate={textRound}
              whileHover={{
                scale: 1.3,
                transition: { ease: "easeOut", duration: 0.4 },
              }}
              viewBox="0 0 300 300"
              className="w-64 h-64 xl:w-96 xl:h-96"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                ></path>
              </defs>
              <text>
                <textPath xlinkHref="#circlePath" className="text-lg">
                  FULLSTACK DEVELOPER * FULLSTACK DEVELOPER *
                </textPath>
              </text>
            </motion.svg>

            <a
              href="./Resume.pdf"
              download
              className=" w-16 h-16 xl:w-24 xl:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto text-white bg-black rounded-full flex items-center justify-center 
                         hover:bg-white hover:text-black border-2 border-black ease-out duration-200"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* HERO H1 */}
        <div className=" relative flex flex-col gap-6  items-center justify-start">
          {/* FIRST LINE */}
          <motion.div
            variants={headerAnimation}
            initial="hidden"
            animate="visible1"
            className=" flex w-full justify-start items-center gap-12"
          >
            <motion.span
              whileHover="bg"
              transition={{ staggerChildren: 0.05 }}
              className="text-4xl bg-white md:text-6xl lg:text-xl xl:text-7xl font-light  leading-relaxed tracking-wide uppercase"
            >
              {heading1.split("").map((char, i) => (
                <motion.span key={i} variants={headerAnimation}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>

          {/* SECOND LINE */}
          <motion.div
            variants={headerAnimation}
            initial="hidden"
            animate="visible2"
            className=" flex w-full justify-start items-center  "
          >
            <motion.span
              whileHover="bg"
              transition={{ staggerChildren: 0.05 }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight  md:leading-relaxed"
            >
              {heading2.split("").map((char, i) => (
                <motion.span key={i} variants={headerAnimation}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
          {/* ADDITIONAL TEXT */}
          <motion.div
            variants={entryAnimation}
            initial="hidden"
            animate="slideIn"
            className="flex justify-end items-center gap-4 w-full mt-4"
          >
            <span className=" md:text-xl xl:tracking-wide xl:text-2xl text-zinc-500 font-light">
              Creating web applications with attention to details and design
            </span>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <motion.div
            initial="hidden"
            animate="slideIn"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative  font-mono h-12 overflow-hidden flex items-center"
        >
            <motion.span whileHover={{x: 2}} className="font-mono">
                Based in the Netherlands
            </motion.span>
            <motion.span
                className="ml-2"
                variants={emojiVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
            >
                🇳🇱
            </motion.span>
        </motion.div>
    </div>
  );
}
