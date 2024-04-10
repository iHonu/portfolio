'use client';
import Link from "next/link";
import Nav from "./Nav";
import { motion, AnimatePresence, spring } from "framer-motion";
import { useState } from "react";



const heading1 = 'Creative';
const heading2 = 'Web Developer';


export default function Hero() {

    const [isHovered, setIsHovered] = useState(false);


   

    const textRoundAnimation = {
        hidden: { opacity: 0, scale: 0},
        enter: { opacity: 1, scale: 1.2, transition: {type:'spring', stiffness: 100, delay: 0.6}},
        hovered:  { rotate:360, transition: {duration:8, ease:"linear", repeat:Infinity}}, 
        blackHover: { backgroundColor: "#000000", color: "#ffffff", scale: 0.9, transition: {duration: 0.5,  ease: [0.17, 0.67, 0.83, 0.67]} }
    }

    const textRound = isHovered ? { } : textRoundAnimation.hovered

    const headerAnimation = {
        hidden: { opacity: 0,  y: 60, x: 10},
        visible1: { opacity: 1,  y: 0, x:0,  transition: {type:'spring', stiffness: 100}, },
        visible2: { opacity: 1,  y: 0, x:0,  transition: {type:'spring', stiffness: 110, delay: 0.3}, },
        bg: { backgroundColor: "#0d0101", color: "#ffffff", transition: {duration: 0.5,  ease: [0.17, 0.67, 0.83, 0.67]} }
    }

    const entryAnimation = {
        hidden: { opacity: 0,  y: 30, },
        slideIn:{ opacity: 1,  y: 0, transition: {type:'spring', stiffness: 120, delay: .5}, },
    }

    return (
        <div className="h-screen w-full flex flex-col px-16 py-8">
            <Nav />
            <div className="relative flex-grow w-full flex flex-col items-center justify-center " >
                
                {/* ADDITIONAL TEXT */}
                <motion.div variants={entryAnimation} initial='hidden' animate='slideIn' className="absolute w-2/3 md:w-1/3 lg:w-1/5 bottom-[10vh] right-[10vw]">
                    <span className="font-light md:text-xl xl:tracking-wide xl:text-2xl ">Creating web applications with attention to details and design</span>
                </motion.div>

                {/* TEXT CIRCLE */}
                <div className="absolute top-[10vh] right-[5vw] xl:right-[12vw] xl:top-[2vh]">
                    <motion.div onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)} variants={textRoundAnimation} initial='hidden' animate='enter' className="hidden md:inline-block cursor-default">
                        <motion.svg animate={textRound}  whileHover={{ scale: 1.2, transition: {ease: "easeOut", duration: .5} }}
                            viewBox="0 0 300 300" className="w-64 h-64 xl:w-96 xl:h-96">
                            <defs>
                                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"></path>
                            </defs>
                            <text>
                                <textPath xlinkHref="#circlePath" className="text-lg">
                                FULLSTACK DEVELOPER * FULLSTACK DEVELOPER *
                                </textPath>
                            </text>
                        </motion.svg>
                        <motion.div> <Link href="/" className=" w-16 h-16 xl:w-24 xl:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto text-white bg-black rounded-full flex items-center justify-center hover:scale-90 ease-out duration-00">
                            Resume
                        </Link></motion.div>
                       
                    </motion.div>
                </div>

                {/* HERO H1 */}
                <div className=" relative flex flex-col gap-6 items-center justify-start">

                    {/* FIRST LINE */}
                    <motion.div variants={headerAnimation} initial="hidden" animate="visible1" className=" flex w-full justify-start items-center gap-12 md:px-2">

                        <motion.span  whileHover='bg' transition={{staggerChildren: 0.05}} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-light">{heading1.split('').map((char, i) => (<motion.span key={i} variants={headerAnimation}>{char}</motion.span>))}</motion.span>
                     
                    </motion.div>

                    {/* SECOND LINE */}
                    <motion.div variants={headerAnimation}  initial="hidden" animate="visible2" className=" flex w-full justify-start items-center gap-4 ">
                     
                        <motion.span whileHover='bg' transition={{staggerChildren: 0.05}} className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">{heading2.split('').map((char, i) => (<motion.span key={i} variants={headerAnimation}>{char}</motion.span>))}</motion.span>
                    </motion.div>
                </div>
            </div>
            
            {/* BOTTOM TEXT */}
            <motion.div variants={entryAnimation} initial='hidden' animate='slideIn' className="relative w-1/2 font-mono text-xl h-12 overflow-hidden flex items-center"> 
                <span className="font-mono text-xl hover:text-red-600 hover:-translate-y-1 duration-300 ease-out  ">Anastasia Tikhonova</span>
            </motion.div>
        </div>
    );
}


