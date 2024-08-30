'use client';

import React from 'react'
import { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion"
import LiIcon from './LiIcon';
import { nanoid } from 'nanoid';

const AnimatedTimelineItem = ( { children } : { children: React.ReactNode }) => {
  // We need to ensure that the parent (this component is fully hydrated before rendering any animated component that references it
  const [containerRendered, setContainerRendered] = useState(false);
    useEffect(() => {
        setContainerRendered(true);
    }, []);

  const ref = useRef<HTMLLIElement>(null);
  return (
    <li key={nanoid()} ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[70%] lg:w-[80%] mx-auto flex flex-column items-center justify-between" >
      { 
        // Only render the animated icon once the reference has been fully hydrated
        // See https://github.com/framer/motion/issues/1853 
        containerRendered &&
        <LiIcon reference={ref} />
      }
      <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type: 'spring'}}
        className="w-full"
      >
        {children}
      </motion.div>
      </li>
  )
}

export default AnimatedTimelineItem;
