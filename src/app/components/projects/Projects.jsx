'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState} from "react";
import useMousePosition from "../../utils/useMousePosition";

const projectList = [
  {
    title: "Forest Magique",
    url: "https://nextjs-webstore-three.vercel.app/",
    tools: "Next.js,TailwindCSS, Stripe, Sanity, GROQ",
    image: "/forest_magique.png",
  },
  {
    title: "Coin Search",
    url: "https://stunning-cocada-99c314.netlify.app/",
    tools: "React, TailwindCSS, Daisy UI,  Framer Motion, Chart.js",
    image: "/coin_search.png",
  },
  {
    title: "Info App",
    url: "https://ihonu.github.io/Current-info/",
    tools: "JavaScript, CSS, HTML, APIs",
    image: "/current_info.png",
  },
  {
    title: "Book Your Future",
    url: "https://hyf-c43-group-1-c55b85dfa12d.herokuapp.com/",
    tools: "React, MUI, Redux Toolkit, Node.js, MongoDB",
    image: "/byf.png",
  },
];

const scaleAnimation = {

    initial: {scale: 0, x:"-50%", y:"-50%"},

    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},

    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}

}

export default function Projects() {
    const [modal, setModal] = useState({active: false, index: 0});
    const hoveredImage = projectList[modal.index].image;
  
   
    const { x: mouseX, y: mouseY } = useMousePosition();

    const handleMouseEnter = (index, event) => {
        const targetX = event.clientX - (window.innerWidth / 2 * 0.25);
        const targetY = event.clientY;  // Adjust Y similarly if needed
        setModal({ active: true, index, x: targetX, y: targetY });
    };

    const handleMouseLeave = () => {
        setModal({ ...modal, active: false });
    };

    

  return (
    <div className=" relative flex w-screen min-h-screen justify-center items-center">
      <div className=" w-screen  max-w-[120rem] px-16 py-8 flex flex-col items-center justify-center">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="text-container w-full border-t-2 border-slate-500 hover:opacity-40 hover:duration-300"
            onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index}) }}
          >
            <Link href={project.url} className="inline-flex flex-col md:flex-row w-full px-6 py-8 md:px-12 md:py-16 items-center md:justify-between gap-6">
                <div className="md:hidden">
                <Image src={project.image} alt="Project Image"  width={250} height={250}  />
                </div>
              <h2 className="text-2xl md:text-4xl xl:text-5xl">{project.title}</h2>
              <p className="text-sm md:text-base font-light">{project.tools}</p>
            </Link>
          </div>
        ))}
        
        {hoveredImage && (
          <motion.div
          style={{ top: mouseY, left: mouseX }}
            className="absolute hidden md:flex overflow-hidden pointer-events-none bg-black"
            variants={scaleAnimation} initial="initial" animate={modal.active ? "enter" : "closed"}
          >
            <div>
                <Image src={hoveredImage} alt="Project Image" width={350} height={300}/>
            </div>
            
          </motion.div>
        )}
      </div>
    </div>
  );
}
