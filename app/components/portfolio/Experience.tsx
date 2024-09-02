import Keywords from './CVKeywords';
import { ResumeWorkType } from '@/app/(portfolio)/JSONResumeSchema';
import { DateAndLocation } from '@/app/components/portfolio/DateAndLocation';
import Markdown from 'markdown-to-jsx'

export const ExperienceDetails = ( { experience } : { experience : ResumeWorkType }) => {
  const { name, location, description, position, url, startDate, endDate, summary, highlights, keywords } = experience;
  return (
    <>
    <h3 className="capitalize font-bold text-xl md:text-2xl">
      {position}
      {url &&
      <a href={url} target="_blank"
        className='capitalize text-primary dark:text-primaryDark hover:text-dark hover:dark:text-light'
      > @ {name}</a>
      }
      {!url &&
      <span className='capitalize text-primary dark:text-primaryDark'>
        @ {name}
      </span>
      }
    </h3>
    <DateAndLocation startDate={startDate} endDate={endDate} location={location} />
    { summary &&
      <span>
        <Markdown>{summary}</Markdown>
      </span>
    }
    { highlights &&
      <ul className='ml-8 list-disc font-medium text-sm md:text-lg w-full'>
        {
          highlights.map((item, index) => (
          <li key={item + index}><span><Markdown>{item}</Markdown></span></li>
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
