'use client';

import React from 'react'
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';

const Details = ( { position, company, companyLink, time, address, work } : { position: string, company: string, companyLink: string, time: string, address: string, work: string }) => {

  // We need to ensure that the parent (this component is fully hydrated before rendering any animated component that references it
  const [containerRendered, setContainerRendered] = useState(false);
    useEffect(() => {
        setContainerRendered(true);
    }, []);

  const ref = useRef<HTMLLIElement>(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-column items-center justify-between" >
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
      >
        <h3 className="capitalize font-bold text-2xl">
          {position} <a href={companyLink} target="_blank"
          className='capitalize text-primary dark:text-primaryDark'
        >@{company}</a>
        </h3>
        <span className='capitalize font-medium text-gray-300/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>
      </motion.div>
      </li>
  )
}

const Experience = () => {
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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
      Experience
    </h2>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div 
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
          style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
            <Details position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
            <Details position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
            <Details position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
            <Details position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
            <Details position="Sofware Engineer" company="Google" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." companyLink="https://www.google.com" />
          </ul>
        </div>
      </div>
  )
}

export default Experience;
