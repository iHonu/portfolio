'use client';
import Link from "next/link";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { useRef, useState } from "react";



export default function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const roundRef = useRef(null);

    const textRound = isHovered ? { } : { rotate:360, transition: {duration:8, ease:"linear", repeat:Infinity}}
    return (
        <div className="h-screen w-full flex flex-col px-16 py-8">
            <Nav />
            <div className="relative flex-grow w-full flex flex-col items-center justify-center">
                
                {/* ADDITIONAL TEXT */}
                <div className="absolute w-2/3 md:w-1/3 lg:w-1/5 bottom-[10vh] right-[10vw]">
                    <span className="font-light md:text-xl ">Creating web applications with attention to details and design</span>
                </div>

                {/* TEXT CIRCLE */}
                <div className="absolute top-[10vh] right-[5vw] xl:right-[12vw] xl:top-[2vh]">
                    <div className="hidden md:inline-block cursor-default">
                        <motion.svg animate={textRound}  whileHover={{ scale: 1.1 }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}  
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
                        <Link ref={roundRef} href="/" className=" w-16 h-16 xl:w-24 xl:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto text-white bg-black rounded-full flex items-center justify-center">
                            Resume
                        </Link>
                    </div>
                </div>

                {/* HERO H1 */}
                <div className="flex flex-col gap-6 items-center justify-start">

                    {/* FIRST LINE */}
                    <div className="flex w-full justify-start items-center gap-12 md:px-2">
                        <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Creative</span>
                        <svg className="h-6 w-6 md:w-12 md:h-12" viewBox="0 0 51 54" fill="red" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51 16.923L47.0423 10.077L25.8539 26.4082L29.4738 0H21.5262L25.1621 26.4082L3.97382 10.077L0 16.923L24.8243 27L0 37.077L3.97382 43.923L25.1621 27.5918L21.5262 54H29.4738L25.8539 27.5918L47.0423 43.923L51 37.077L26.1918 27L51 16.923Z" fill="#EF4444"/>
                        </svg>
                    </div>

                    {/* SECOND LINE */}
                    <div className="flex w-full justify-start items-center gap-4 ">
                        <svg viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8  md:w-16 md:h-16">
                            <path d="M429.2 288.101C429.2 209.101 366.5 144.701 288.1 142.101V0.800781C209.1 0.800781 144.7 63.5008 142.1 141.901H0.799805C0.799805 220.901 63.4998 285.301 141.9 287.901V429.101C220.9 429.101 285.3 366.401 287.9 288.001H429.2V288.101Z" fill="#EF4444"/>
                        </svg>

                        <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">Web Developer</span>
                    </div>
                </div>
            </div>
            
            {/* BOTTOM TEXT */}
            <div className="flex justify-center md:justify-start"> 
                <span className="font-mono text-xl">Anastasia Tikhonova</span>
            </div>
        </div>
    );
}


