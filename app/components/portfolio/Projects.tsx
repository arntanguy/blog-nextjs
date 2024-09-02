import React from 'react'
import Keywords from './CVKeywords';
import {  LinkIcon } from '@heroicons/react/24/outline';
import { ProjectsType } from '@/app/(portfolio)/JSONResumeSchema';
import { StartEndDate } from '@/app/components/portfolio/DateAndLocation';
import Markdown from 'markdown-to-jsx'
import CVLink from './CVLink';

export const ProjectsDetails = ( { project } : { project : ProjectsType } ) => {
  const { name, description, highlights, keywords, startDate, endDate, url, roles, entity, type } = project;
  return (
    <>
    <h3 className="uppercase font-bold text-xl md:text-2xl">
      <CVLink href={url}>{name}</CVLink>

      { entity && 
      <span className='uppercase text-primary dark:text-primaryDark'>@ {entity}</span>
      }
    </h3>
    <div className='flex items-center justify-start flex-wrap uppercase text-sm md:text-lg font-medium dark:text-gray-300 text-gray-600'>
        <StartEndDate startDate={startDate} endDate={endDate} />
    </div>
    <div className="mt-2 md:mt-4">
    { description &&
        <span><Markdown>{description}</Markdown></span>
    }
    { highlights &&
      <ul className='ml-8 list-disc font-medium text-sm md:text-lg w-full'>
        {
          highlights.map((item, index) => (
          <li key={item + index}> <span><Markdown>{item}</Markdown></span></li>
            ))
        }
      </ul>
    }
    </div>
    {
        keywords && <div className="flex items-center self-start m-4"><Keywords keywords={keywords} /></div>
    }
    </>
  )
}
