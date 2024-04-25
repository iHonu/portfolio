"use client";

import Link from "next/link";
import { motion } from "framer-motion";


const links = [
  { title: "Contact", url: "mailto:honu347@gmail.com" },
  { title: "Linkedin", url: "https://www.linkedin.com/in/honu347/" },
  { title: "GitHub", url: "https://github.com/iHonu" },
  
];

export default function Nav() {

 

  const navVariants = {
    hidden: { opacity: 0, y: -60, x: 10 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const linksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="flex justify-between relative">
      {/* INFO */}
      <div className="w-screen h-fit flex flex-col overflow-hidden gap-3 md:gap-32 justify-start md:flex-row">
        <motion.span
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="font-mono text-sm hidden md:inline-block pb-4 "
        >
          Anastasia Tikhonova
        </motion.span>
        <motion.p
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="font-mono text-sm inline-block "
        >            
         honu347@gmail.com

            
        </motion.p>
      </div>
      {/* LINKS */}
      <motion.div
        className="relative flex items-end flex-col font-mono gap-2 tracking-wide duration-75"
        variants={linksContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link) => (
          <motion.div
            key={link.title}
            variants={linkVariants}
            whileTap={{ x: 10 }}
            whileHover={{ x: -10}}
            className="px-1  cursor-pointer overflow-hidden bg-black text-white"
          >
            <Link href={link.url}>{link.title}</Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
