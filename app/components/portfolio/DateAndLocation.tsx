import React from 'react'
import { ClockIcon, ArrowLongRightIcon, MapPinIcon } from '@heroicons/react/24/outline';

export function handleDate(startDate: string | undefined, endDate: string | undefined)
{
  var dateStr : string = startDate ? startDate : '';
  if(endDate && startDate) { dateStr += ' - ' + endDate; }
  else if (startDate && !endDate) { dateStr += '- Present' }
  return dateStr
}

export const StartEndDate = ( { startDate, endDate, className } : { startDate?: string | undefined, endDate?: string | undefined, className?: string } ) => {

  if(!startDate && !endDate) { return <></>; }

  const endDateStr = endDate? endDate : "Present";

  return (
    <div className={`flex items-center self-start uppercase text-sm md:text-lg font-medium dark:text-gray-400 text-gray-600 ${className}`}>
      <div className="flex items-center justify-center">
        <ClockIcon className="inline-block h-4 w-4 mr-2" /> 
        { startDate &&
          <span>{ startDate }</span>
        }
        <div className="flex items-center self-start">
        { startDate && <ArrowLongRightIcon className="inline-block h-4 w-4 mx-2" />}
        <span> { endDateStr }</span>
        </div>
      </div>
    </div>
  )
}

export const DateAndLocation = ( { startDate, endDate, location, className } : { startDate?: string | undefined, endDate?: string | undefined, location?: string | undefined, className?: string}) =>
{
  return (
    <div className={`flex items-center justify-start flex-wrap uppercase text-sm md:text-lg font-medium dark:text-gray-300 text-gray-600 mb-2 mt-1 md:mb-4 ${className}`}>
      <StartEndDate startDate={startDate} endDate={endDate} />
      {location &&
          <>
      <span className='mx-auto'></span>
      <div className="flex items-center justify-center">
        <MapPinIcon className="inline-block h-4 w-4 mr-2" /> {location}
      </div>
      </>
      }
    </div>)
}
