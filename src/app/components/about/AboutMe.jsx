"use client";

import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const Word = ({ word, index, total, scrollYProgress }) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.span key={index} style={{ opacity }} className="tracking-wider leading-normal">
      {word}{" "}
    </motion.span>
  );
};

const Words = ({ text, scrollYProgress }) => {
  const wordsArray = text.split(" ");
  return wordsArray.map((word, index) => (
    <Word word={word} index={index} total={wordsArray.length} scrollYProgress={scrollYProgress} key={index} />
  ));
};

export default function About() {
  const title = "A b o u t";
  const paragraphOne =
    "I am an advocate of the DRY principle, valuing structured and readable code as fundamental to successful software development.";
  const paragraphTwo =
    "Believe that a good user experience and design impact the success of a project.";
  const paragraphThree =
    "Can work solo, but I am more of a team player. In my opinion, a strong and cohesive team can achieve better results.";

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const transition = {
    duration: 0.8,
    ease: "easeInOut",
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col h-screen items-center justify-center px-16 py-16 max-w-[120rem] mx-auto pb-56 pt-24 bg-[#312F2F] text-white"
    >
      <motion.div
        style={{ originX: 0.5, scaleX }}
        transition={transition}f
        className="h-1 w-full bg-white absolute top-10 left-0 pb-2 md:pb-0"
      />
      <div className="h-2/3 flex flex-col justify-center gap-48">
        <motion.div className="relative self-start">
          <motion.span
            style={{ opacity: scrollYProgress }}
            className="relative text-2xl lg:text-3xl font-bold text-start uppercase"
          >
            <Words text={title} scrollYProgress={scrollYProgress} />
          </motion.span>
          <span className="absolute opacity-15 top-0 left-0 text-2xl lg:text-3xl font-bold text-start uppercase  tracking-wider leading-normal">
            {title}
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-24 ">
          <div className="relative flex-1 ">
            <motion.p
              style={{ opacity: scrollYProgress }}
              className="text-2xl md:text-3xl lg:text-4xl  font-light"
            >
              <Words text={paragraphOne} scrollYProgress={scrollYProgress} />
              <span className="absolute opacity-15 top-0 left-0 tracking-wider leading-normal">{paragraphOne}</span>
            </motion.p>
          </div>
          <div className="flex flex-1 flex-col relative gap-4 md:gap-16 md:text-xl lg:text-2xl  tracking-wider leading-normal md:uppercase">
            <motion.p style={{ opacity: scrollYProgress }}>
              <Words text={paragraphTwo} scrollYProgress={scrollYProgress} />
              <span className="absolute opacity-15 top-0 left-0 leading-normal">{paragraphTwo}</span>
            </motion.p>
            <motion.p
              className="relative"
              style={{ opacity: scrollYProgress }}
            >
              <Words text={paragraphThree} scrollYProgress={scrollYProgress} />
              <span className="absolute opacity-15 top-0 left-0 leading-normal">{paragraphThree}</span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
