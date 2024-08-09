"use client";

import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import ReactPlayer from 'react-player'

export function Video ({ url } : { url: string }) {
  return (
    <div className="relative pt-[56.25%] mt-2 mb-2">
      <ReactPlayer className="absolute top-0 left-0" url={url} width="100%" height="100%" />
    </div>
  )
}

export function MarkdownToReact({ markdown } : { markdown: string }) {
  return <Markdown
    children={markdown}
    options={{
      overrides: {
        Link: {
          component: Link
        },
        Video: {
          component: Video
        }
      }
    }} />
}
