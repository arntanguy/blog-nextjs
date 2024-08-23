'use client';

import React from 'react'
import { useRef} from 'react';
import { motion, useScroll } from "framer-motion"

const AnimatedTimeline = ({children} : {children: React.ReactNode}) => {
  const ref = useRef(null);
  const { scrollYProgress} = useScroll(
    {
      target: ref,
      offset: 
      [
       "start end", // empty when the start of the container appears at the bottom of the viewport
       "center center", // full when center of the container reaches center of viewport 
      ]
    });
  return (
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div 
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
          style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {children}
          </ul>
        </div>
  )
}

export default AnimatedTimeline;
