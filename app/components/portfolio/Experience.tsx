import Keywords from './CVKeywords';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ResumeWorkType } from '@/app/(portfolio)/JSONResumeSchema';
import { StartEndDate } from '@/app/components/portfolio/Date';

export const ExperienceDetails = ( { experience } : { experience : ResumeWorkType }) => {
  const { name, location, description, position, url, startDate, endDate, summary, highlights, keywords } = experience;
  return (
    <>
    <h3 className="capitalize font-bold text-xl md:text-2xl">
      {position}
      {url &&
      <a href={url} target="_blank"
        className='capitalize text-primary dark:text-primaryDark'
      > @ {name}</a>
      }
      {!url &&
      <span className='capitalize text-primary dark:text-primaryDark'>
        @ {name}
      </span>
      }
    </h3>
    <div className='flex items-center justify-start flex-wrap uppercase text-sm md:text-lg font-medium dark:text-gray-300 text-gray-600'>
      <StartEndDate startDate={startDate} endDate={endDate} />
      <span className='mx-auto'></span>
      <div className="flex items-center justify-center">
        <MapPinIcon className="inline-block h-4 w-4 mr-2" /> {location}
      </div>
    </div>
    { summary &&
      <p className='font-medium text-sm md:text-lg w-full'>
        {summary}
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
