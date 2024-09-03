import React from 'react';
import {MediaPlayer} from '@/app/components/Carousel';
import { FeaturedProjectType } from '@/app/(portfolio)/JSONResumeSchema'; 
import { DateAndLocation } from '@/app/components/portfolio/DateAndLocation';
import Markdown from 'markdown-to-jsx'
import Keywords from '@/app/components/portfolio/CVKeywords';
import CVLink from '@/app/components/portfolio/CVLink';
import {nanoid} from 'nanoid'
import clsx from 'clsx'

export const sortFeaturedProjects = ( projects : FeaturedProjectType[] ) =>
{
  // Sort projects by featured: true first
  // Sort featured projects by end date in decreaing order
  // Then sort remaining projects by end date in decreating order 
  const sortedProjects = projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.endDate > b.endDate) return -1;
    if (a.endDate < b.endDate) return 1;
    return 0;
  })
  return sortedProjects;

  // return (
  //   <>
  //     <CVSectionTitle title="Featured Projects" />
  //     {
  //       sortedProjects.map((project) => (
  //         <FeaturedProject key={nanoid()} project={project} />
  //       ))
  //     }
  //   </>)
}

export function DummyIcon({ scale, className } : { scale?: number, className?: string })
{
  const w = 100 * (scale || 1);
  return (
      <figure className={`stroke-dark dark:stroke-light scale-100 ${className}`}>
      <svg width={`${w}`} height={`${w}`} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" className="stroke-[2px] fill-none stroke-primary dark:stroke-primaryDark dark:bg-gray-800" />
        <circle cx="50" cy="50" r="45" className="stroke-[5px] fill-none border-light" />
        <circle cx="50" cy="50" r="25" className="animate-pulse stoke-[2px] fill-primary dark:fill-primaryDark" />
      </svg>
      </figure>
  )
}

// One colum below md size
// Two colum on larger screen 
export function FeaturedProject( { project } : { project: FeaturedProjectType } ) {
  const ref = React.useRef(null);
  return (
      <div ref={ref} className="flex w-full first:mt-0 mb-16 last:mb-0">
          <div className="hidden md:flex md:w-2/5 items-center justify-center">
            { project.media 
              ? <MediaPlayer image={project.media} className="w-full !h-[350px]" showTitle={false} />
              : <DummyIcon scale={1} />
            }
          </div>
        <div className={clsx("w-full md:w-3/5", "flex flex-col justify-center, px-2 md:px-8")}>

        { project.media &&
            <div className="md:hidden w-full first:mt-0 mt-16 mb-2 flex items-center justify-center">
              <MediaPlayer image={project.media} className="w-full h-[300px]" showTitle={false} />
            </div>
        }

        <h1 className="uppercase flex items-center self-start font-bold text-xl md:text-2xl">
          { !project.media &&
            <DummyIcon scale={0.3} className="block md:hidden mr-2" />
          }
          <CVLink href={project.url}>{project.name}</CVLink>
        </h1>

        <DateAndLocation location={project.location} startDate={project.startDate} endDate={project.endDate} />

        { project.description &&
          <div className="text-lg w-full mt-4 md:mt-8">
              <Markdown>{project.description}</Markdown>
          </div>
        }
        { project.highlights &&
          <ul className='ml-4 md:ml-8 list-disc font-medium text-sm md:text-lg w-full mt-2 md:mt-4'>
          { project.highlights.map((highlight) => (
            <li key={nanoid()}><span><Markdown key={nanoid()}>{highlight}</Markdown></span></li>
            ))
          }
          </ul>
        }
        {
          project.roles &&
            <>
            <h3 className='font-bold uppercase tracking-wide text-lg md:text-xl dark:text-primaryDark text-primary mt-4 md:mt-8'>Roles</h3>
            <ul className='ml-4 md:ml-8 list-disc font-medium text-sm md:text-lg w-full mt-1 md:mt-2'>
            {
              project.roles.map((role) => (
                <li key={nanoid()}><span><Markdown key={nanoid()}>{role}</Markdown></span></li>
              ))
            }
            </ul>
            </>
        }
        {
            project.keywords && <div className="flex items-center self-start m-none md:m-2"><Keywords keywords={project.keywords} /></div>
        }
        </div>
      </div>
  )
}
