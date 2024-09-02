import {  LinkIcon } from '@heroicons/react/24/outline';
import { FaGithub } from "react-icons/fa";

export default function CVLink( { href, children, className } : { href?: string, children: React.ReactNode, className?: string } )
{
  return (
    <>
      {href &&
      <div className="flex self-start items-center">
      { href.startsWith('https://github.com') 
          ? <FaGithub size="1rem" className="inline-block h-4 w-4 mr-2" />
          : <LinkIcon className="inline-block h-4 w-4 mr-2" />
      }
      <a href={href} target="_blank" className={`uppercase hover:text-primary hover:dark:text-primaryDark ${className}`}>{children}</a>
      </div>
      }
      
      {!href &&
      <span className='uppercase'>{children}</span>
      }
    </>
  )
}
