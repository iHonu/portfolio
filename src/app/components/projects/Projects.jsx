'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const projectList = [
  {
    title: "Forest Magique",
    url: "https://nextjs-webstore-three.vercel.app/",
    tools: "JavaScript, React, Next.js, TailwindCSS, CSS, SCSS",
    image: "/image1.jpg",
  },
  {
    title: "Coin Search",
    url: "https://stunning-cocada-99c314.netlify.app/",
    tools: "JavaScript, React, Next.js, TailwindCSS, CSS, SCSS",
    image: "/image2.jpg",
  },
  {
    title: "Info App",
    url: "https://ihonu.github.io/Current-info/",
    tools: "JavaScript, React, Next.js, TailwindCSS, CSS, SCSS",
    image: "/image3.jpg",
  },
  {
    title: "Book Your Future",
    url: "https://hyf-c43-group-1-c55b85dfa12d.herokuapp.com/",
    tools: "JavaScript, React, Next.js, TailwindCSS, CSS, SCSS",
    image: "/image4.jpg",
  },
];

export default function Projects() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <div className="relative w-full max-w-[120rem] px-16 py-8 flex flex-col items-center justify-center">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="text-container w-full border-t-2 border-slate-500 hover:opacity-40 hover:duration-300"
            onMouseEnter={() => setHoveredImage(project.image)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Link href={project.url} className="inline-flex w-full px-12 py-16 items-center justify-between">
              <h2 className="text-5xl">{project.title}</h2>
              <p className="font-light">{project.tools}</p>
            </Link>
          </div>
        ))}
        {hoveredImage && (
          <motion.div
            className="absolute overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Image src={hoveredImage} alt="Project Image" width={350} height={300} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
