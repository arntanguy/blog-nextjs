export const ExperienceDetails = ( { position, company, companyLink, time, address, work } : { position: string, company: string, companyLink?: string, time: string, address: string, work: string }) => {
  return (
    <>
    <h3 className="capitalize font-bold text-2xl">
      {position} 
      {companyLink && 
      <a href={companyLink} target="_blank"
        className='capitalize text-primary dark:text-primaryDark'
      >@{company}</a>
      }
      {!companyLink &&
      <span className='capitalize text-primary dark:text-primaryDark'>
        @{company}
      </span>
      }
    </h3>
    <span className='capitalize font-medium text-gray-300/75'>
      {time} | {address}
    </span>
    <p className='font-medium w-full'>
      {work}
    </p>
    </>
  )
}
