import React from 'react'

export default function Keywords( { keywords }: { keywords: string[] })
{
  //Unique set of uppercase keywords
  const uniqueKeywords = Array.from(new Set(keywords.map((keyword) => keyword.toUpperCase())));
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {
        uniqueKeywords.map((keyword) => (
          <div key={keyword} className="flex items-center justify-center p-2 m-0.5 md:m-1 text-sm tracking-wider md:text-base text-primary dark:text-gray-400 uppercase border-2 border-solid border-gray-500 rounded-lg hover:dark:border-gray-400 hover:dark:text-gray-300">{keyword}</div>
        ))
      }
    </div>
  )
}

