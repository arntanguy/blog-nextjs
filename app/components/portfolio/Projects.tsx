import React from 'react'
import Keywords from './CVKeywords';
import { ClockIcon, LinkIcon } from '@heroicons/react/24/outline';
import { ProjectsType } from '@/app/(portfolio)/JSONResumeSchema';
import { StartEndDate } from '@/app/components/portfolio/Date';

export const ProjectsDetails = ( { project } : { project : ProjectsType } ) => {
  const { name, description, highlights, keywords, startDate, endDate, url, roles, entity, type } = project;
  return (
    <>
    <h3 className="uppercase font-bold text-xl md:text-2xl">
      {url &&
      <div className="flex self-start items-center">
      <LinkIcon className="inline-block h-4 w-4 mr-2" />
      <a href={url} target="_blank" className='uppercase'>{name}</a>
      </div>
      }
      
      {!url &&
      <span className='uppercase'>{name}</span>
      }

      { entity && 
      <span className='uppercase text-primary dark:text-primaryDark'>@ {entity}</span>
      }
    </h3>
    <div className='flex items-center justify-start flex-wrap uppercase text-sm md:text-lg font-medium dark:text-gray-300 text-gray-600'>
        <StartEndDate startDate={startDate} endDate={endDate} />
    </div>
    { description &&
      <p className='font-medium text-sm md:text-lg w-full'>
        {description}
      </p>
    }
    { highlights &&
      <ul className='ml-8 list-disc font-medium text-sm md:text-lg w-full'>
        {
          highlights.map((item, index) => (
          <li key={item + index}> {item}</li>
            ))
        }
      </ul>
    }
    {
        keywords && <div className="flex items-center self-start m-4"><Keywords keywords={keywords} /></div>
    }
    </>
  )
}
