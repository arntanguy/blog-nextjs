'use client';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ( { reference, className } : { reference: React.RefObject<HTMLLIElement>, className?: string } ) => {
  const { scrollYProgress} = useScroll(
    {
      target: reference, // Target is the parent's <li> tag
      // Offset is a set of two intersections between the target and container
      // Animation starts when the target's <start|center|end> crosses the container's (viewport's) <start|center|end> (scrollYProgress = 0)
      // Animation ends when the target's <start|center|end> crosses the container's (viewport's) <start|center|end> (scrollYProgress = 1)
      offset: [
        "center end", // Start animation when the center of the "reference" target (parent's <li>) enters bottom of the viewport
        "center center", // Finish animation when the center of the "reference" target  crosses the center of the viewport
      ]
    });

  return (
  <div className={`${className}`}>
      <figure className={`absolute -left-7 stroke-dark dark:stroke-light scale-150 ${className}`}>
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20" className="stroke-1 fill-none stroke-primary dark:stroke-primaryDark dark:bg-gray-800" />
        <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-none border-light" 
        style={{ pathLength: scrollYProgress }}
        />
        <circle cx="75" cy="50" r="10" className="animate-pulse stoke-1 fill-primary dark:fill-primaryDark" />
      </svg>
      </figure>
  </div>
  )
}

export default LiIcon;
