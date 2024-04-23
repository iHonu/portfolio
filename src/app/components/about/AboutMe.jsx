"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      scale: .5,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { scale: 1 },
  };

  return (
    <div ref={ref} className="relative flex flex-col h-[80vh] items-start justify-between px-16 py-16 max-w-[120rem] mx-auto pb-56 pt-24 bg-[#312F2F] text-white">
      <motion.div style={{ width, opacity: scrollYProgress }} className="h-2 bg-white"></motion.div>
      
      <motion.span style={{ opacity: scrollYProgress }} className="text-2xl lg:text-3xl font-bold text-start uppercase ">
        About Me
      </motion.span>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="hover-expand-cursor">
          <motion.span style={{ opacity: scrollYProgress }} className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-extralight">
            I am an advocate of the DRY principle, valuing structured and readable code as fundamental to successful software development.
          </motion.span>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 md:text-xl lg:text-2xl md:leading-relaxed tracking-wide md:uppercase">
          <motion.span style={{ opacity: scrollYProgress }}>
            Believe that a good user experience and design impact the success of a project.
          </motion.span>
          <motion.span style={{ opacity: scrollYProgress }}>
            Can work solo, but I am more of a team player. In my opinion, a strong and cohesive team can achieve better results.
          </motion.span>
        </div>
      </div>

    </div>
  );
}
