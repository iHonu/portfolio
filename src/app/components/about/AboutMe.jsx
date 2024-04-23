"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className=" relative flex flex-col h-[75vh] items-start justify-between px-16 py-16 max-w-[120rem] mx-auto  bg-[#312F2F] text-white"
    >
      
        {" "}
        <motion.div
          style={{ width: width, opacity: scrollYProgress}}
          className="h-2 bg-white"
        ></motion.div>
        
          <motion.span style={{opacity: scrollYProgress}} className="text-2xl lg:text-3xl font-bold text-start uppercase ">
            About Me
          </motion.span>
       
        {/* TEXT */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="hover-expand-cursor">
            <motion.span style={{opacity: scrollYProgress}} className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-extralight">
              I am a advocate of the DRY principle, valuing structured and
              readable code as fundamental to successful software development
            </motion.span>
          </div>
          <div className="hover-expand-cursor flex flex-col gap-4 md:gap-8 md:text-xl lg:text-2xl leading-relaxed uppercase">
            <motion.span style={{opacity: scrollYProgress}}>
              Believe that a good user experience and design impact the success
              of a project.
            </motion.span>
            <motion.span style={{opacity: scrollYProgress}}>
              Can work solo, but I am more of a team player. In my opinion, a
              strong and cohesive team can achieve better results
            </motion.span>
          </div>
        </div>
        <div className="flex flex-col justify-center text-sm">
          {/* SKILLS */}
          <motion.div style={{opacity: scrollYProgress}}>
            <span className=" opacity-65">JS, React, Next.js, CSS</span>
          </motion.div>
          <div>
            <span>Node.js, MySQL, MongoDB, CSS</span>
          </div>
          <div>
            <span className="opacity-65">JS, React, Next.js, CSS</span>
          </div>
        </div>
    
    </div>
  );
}
