import React from 'react'

export default function Keywords( { keywords }: { keywords: string[] })
{
  //Unique set of uppercase keywords
  const uniqueKeywords = Array.from(new Set(keywords.map((keyword) => keyword.toUpperCase())));
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {
        uniqueKeywords.map((keyword) => (
          <div key={keyword} className="flex items-center justify-center p-2 m-0.5 md:m-1 text-sm md:text-base text-primary dark:text-primaryDark uppercase border-2 border-solid border-primary rounded-lg">{keyword}</div>
        ))
      }
    </div>
  )
}

