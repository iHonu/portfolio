'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { title: "Linkedin", url: "https://www.linkedin.com/in/honu347/" },
    { title: "GitHub", url: "https://github.com/iHonu" },
    { title: "Contact", url: "/contact" },
];

export default function Nav() {
    const navVariants = {
        hidden: { opacity: 0, y: -60, x: 10 },
        visible: { 
            opacity: 1, y: 0, x: 0,  
            transition: { type: 'spring', stiffness: 100 },
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
            opacity: 1, y: 0,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    return (
        <div className="flex justify-between">
            {/* INFO */}
            <div className="w-2/3 md:w-1/3 flex flex-col overflow-hidden justify-between md:flex-row">
                <motion.p
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-mono text-sm"
                >
                    honu347@gmail.com
                </motion.p>
                <motion.p
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-mono text-sm hidden md:inline-block"
                >
                    Based in the Netherlands
                </motion.p>
            </div>
            {/* LINKS */}
            <motion.div
                className="flex items-end flex-col font-mono gap-2 text-mono tracking-wide duration-75"
                variants={linksContainerVariants}
                initial="hidden"
                animate="visible"
            >
                {links.map((link) => (
                    <motion.a
                        key={link.title}
                        href={link.url}
                        variants={linkVariants}
                        className="cursor-pointer hover:font-bold hover:-translate-x-1 ease-out duration-75"
                    >
                        {link.title}
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}
