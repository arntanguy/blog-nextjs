import React from 'react'

export default function Keywords( { keywords }: { keywords: string[] })
{
  //Unique set of uppercase keywords
  const uniqueKeywords = Array.from(new Set(keywords.map((keyword) => keyword.toUpperCase())));
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {
        uniqueKeywords.map((keyword) => (
          <div key={keyword} className="flex items-center justify-center p-1 md:p-2 mr-0.5 md:m-1 text-sm md:text-base md:tracking-wider text-gray-600 hover:text-gray-800 dark:text-gray-400 uppercase border-2 border-solid border-gray-500 hover:border-gray-800 hover:dark:border-gray-400 hover:dark:text-gray-300 rounded-lg">{keyword}</div>
        ))
      }
    </div>
  )
}

