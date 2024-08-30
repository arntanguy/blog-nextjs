import Keywords from './CVKeywords';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const ExperienceDetails = ( { position, company, companyLink, time, address, summary, highlights, keywords} : { position: string, company: string, companyLink?: string, time: string, address: string, summary?: string, highlights?: string[], keywords?: string[]}) => {
  return (
    <>
    <h3 className="capitalize font-bold text-xl md:text-2xl">
      {position}
      {companyLink &&
      <a href={companyLink} target="_blank"
        className='capitalize text-primary dark:text-primaryDark'
      > @ {company}</a>
      }
      {!companyLink &&
      <span className='capitalize text-primary dark:text-primaryDark'>
        @{company}
      </span>
      }
    </h3>
    <div className='flex items-center justify-start flex-wrap uppercase text-sm md:text-lg font-medium text-gray-300/75'>
      <div className="flex items-center justify-center">
        <ClockIcon className="inline-block h-4 w-4 mr-2" /> {time}
      </div>
      <span className='mx-auto'></span>
      <div className="flex items-center justify-center">
        <MapPinIcon className="inline-block h-4 w-4 mr-2" /> {address}
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
