'use client';

import React from 'react'
import { useRef, useState } from 'react';
import { motion, useScroll } from "framer-motion"
import { nanoid } from 'nanoid'

const AnimatedTimeline = ({children} : {children: React.ReactNode}) => {
  const ref = useRef(null);

  const { scrollYProgress} = useScroll(
    {
      target: ref,
      layoutEffect: false, 
      offset: 
      [
       "start end", // empty when the start of the container appears at the bottom of the viewport
       "center start", // full when center of the container reaches center of viewport 
      ]
    });
  return (
        <div ref={ref} className="w-[90%] md:[w-80%] lg:w-[75%] mx-auto relative">
          {/* // Vertical bar with height growing with scroll */}
          <motion.div 
          className="hidden md:block absolute left-2 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
          style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between md:ml-4">
            {children}
          </ul>
        </div>
  )
}

export default AnimatedTimeline;
