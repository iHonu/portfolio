'use client';

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function StickyCursor() {

  //MAKE CURSOR BIGGER ON HOVER
  const cursorSize = useMotionValue(20);  
  const cursorColor = useMotionValue('#000');

  // Smooth transition for cursor size
  const smoothSize = useSpring(cursorSize, {
    stiffness: 300,
    damping: 30,
  });

  //MOUSE POSITION
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  // Smooth transition for mouse position
  const smoothOptions = { damping: 20, stiffness: 260, mass: 0.5 };

  
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  // Update mouse position
  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - smoothSize.get() / 2);
    mouse.y.set(clientY - smoothSize.get() / 2);
  };

  // Make cursor bigger when hovering
  const handleMouseEnter = () => {
    cursorSize.set(120);  
    cursorColor.set('rgb(239 68 68)');
  };

  const handleMouseLeave = () => {
    cursorSize.set(20);  
    cursorColor.set('#000');
  };

  
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    const textElements = document.querySelectorAll('.hover-expand-cursor');
    textElements.forEach(elem => {
      elem.addEventListener('mouseenter', handleMouseEnter);
      elem.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      textElements.forEach(elem => {
        elem.removeEventListener('mouseenter', handleMouseEnter);
        elem.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="bg-black rounded-full fixed"
      style={{ 
        width: smoothSize,
        height: smoothSize,
        left: smoothMouse.x,
        top: smoothMouse.y,
        backgroundColor: cursorColor
      }}
    ></motion.div>
  );
}
